export const deferredPromise = () => {
    let outsideResolver;
    const promise = new Promise((innerResolver) => {
        outsideResolver = innerResolver;
    });
    promise.resolve = () => {
        outsideResolver();
    };
    return promise;
};
export class WelpodronCarousel {
    element;
    translating = false;
    controls;
    items;
    currentItem;
    touchStartX = 0;
    touchDeltaX = 0;
    swipeThreshold = 45;
    isMouseInside = false;
    autoSildeTimer;
    autoSlideTime = 4000;
    constructor(element) {
        this.element = element;
        this.items = [
            ...this.element.querySelectorAll("[data-carousel-item]"),
        ].filter((item) => item.parentElement &&
            !item.parentElement.closest("[data-carousel-item]"));
        this.currentItem = this.items[0];
        this.items.forEach((item) => {
            if (item.getAttribute("data-active"))
                return (this.currentItem = item);
        });
        this.items.forEach((item) => {
            this.currentItem === item
                ? item.setAttribute("data-active", "")
                : item.removeAttribute("data-active");
        });
        this.controls = document.querySelectorAll(`[data-carousel-action][data-carousel-id=${this.element.id}]`);
        this.controls.forEach((control) => {
            control.removeEventListener("click", this.#_handleClick);
            control.addEventListener("click", this.#_handleClick);
        });
        this.element.removeEventListener("touchstart", this.#_handleTouchStart);
        this.element.addEventListener("touchstart", this.#_handleTouchStart, {
            passive: true,
        });
        this.element.removeEventListener("mouseenter", this.#_handleMouseEnter);
        this.element.removeEventListener("mouseleave", this.#_handleMouseLeave);
        this.element.removeEventListener("focusin", this.#_handleFocusIn);
        this.element.removeEventListener("focusout", this.#_handleFocusOut);
        this.element.addEventListener("mouseenter", this.#_handleMouseEnter);
        this.element.addEventListener("mouseleave", this.#_handleMouseLeave);
        this.element.addEventListener("focusin", this.#_handleFocusIn);
        this.element.addEventListener("focusout", this.#_handleFocusOut);
        this.autoSildeTimer = setInterval(() => {
            this.slide("next");
        }, this.autoSlideTime);
    }
    getNextItem = (position) => {
        const currentItemIndex = this.items.indexOf(this.currentItem);
        if (position === "next") {
            return this.items[(currentItemIndex + 1) % this.items.length];
        }
        if (position === "prev") {
            return this.items[(currentItemIndex + this.items.length - 1) % this.items.length];
        }
        if (position === "after") {
            return this.items[currentItemIndex + 1];
        }
        if (position === "before") {
            return this.items[currentItemIndex - 1];
        }
        return this.items[parseInt(position)];
    };
    getNextDirection = (nextItem) => {
        const currentItemIndex = this.items.indexOf(this.currentItem);
        const nextItemIndex = this.items.indexOf(nextItem);
        const firstIndex = 0;
        const lastIndex = this.items.length - 1;
        if (nextItemIndex === lastIndex && currentItemIndex === firstIndex) {
            return "right";
        }
        if (nextItemIndex === firstIndex && currentItemIndex === lastIndex) {
            return "left";
        }
        return nextItemIndex > currentItemIndex ? "left" : "right";
    };
    slide = (position) => {
        if (this.translating)
            return;
        const nextItem = this.getNextItem(position);
        if (!nextItem || nextItem === this.currentItem)
            return;
        this.translating = true;
        const nextDirection = this.getNextDirection(nextItem);
        const currentItemTransition = deferredPromise();
        const nextItemTransition = deferredPromise();
        nextItem.setAttribute("data-active", "");
        nextDirection === "left"
            ? nextItem.setAttribute("data-carosel-item-sliding-right", "")
            : nextItem.setAttribute("data-carosel-item-sliding-left", "");
        nextItem.scrollWidth;
        nextDirection === "left"
            ? nextItem.removeAttribute("data-carosel-item-sliding-right")
            : nextItem.removeAttribute("data-carosel-item-sliding-left");
        nextDirection === "left"
            ? this.currentItem.setAttribute("data-carosel-item-sliding-left", "")
            : this.currentItem.setAttribute("data-carosel-item-sliding-right", "");
        setTimeout(() => {
            nextItem.addEventListener("transitionend", () => {
                nextItemTransition.resolve();
            }, { once: true });
            nextItem.dispatchEvent(new TransitionEvent("transitionend"));
        }, parseFloat(window.getComputedStyle(nextItem).transitionDuration) * 1000);
        setTimeout(() => {
            this.currentItem.addEventListener("transitionend", () => {
                this.currentItem.removeAttribute("data-active");
                nextDirection === "left"
                    ? this.currentItem.removeAttribute("data-carosel-item-sliding-left")
                    : this.currentItem.removeAttribute("data-carosel-item-sliding-right");
                currentItemTransition.resolve();
            }, { once: true });
            this.currentItem.dispatchEvent(new TransitionEvent("transitionend"));
        }, parseFloat(window.getComputedStyle(this.currentItem).transitionDuration) * 1000);
        Promise.all([currentItemTransition, nextItemTransition]).then(() => {
            this.currentItem = nextItem;
            this.translating = false;
        });
    };
    #_handleClick = (evt) => {
        evt.preventDefault();
        clearInterval(this.autoSildeTimer);
        const currentTarget = evt.currentTarget;
        const action = this[(currentTarget.getAttribute("data-carousel-action"))];
        const actionArgs = currentTarget.getAttribute("data-carousel-action-args");
        if (action instanceof Function)
            action(actionArgs);
    };
    #_handleTouchStart = (evt) => {
        this.touchStartX = evt.touches[0].clientX;
        this.element.removeEventListener("touchend", this.#_handleTouchEnd);
        this.element.addEventListener("touchend", this.#_handleTouchEnd);
        this.element.removeEventListener("touchmove", this.#_handleTouchMove);
        this.element.addEventListener("touchmove", this.#_handleTouchMove);
    };
    #_handleTouchMove = (evt) => {
        this.touchDeltaX =
            evt.touches && evt.touches.length > 1
                ? 0
                : evt.touches[0].clientX - this.touchStartX;
    };
    #_handleTouchEnd = (evt) => {
        this.element.removeEventListener("touchmove", this.#_handleTouchMove);
        this.element.removeEventListener("touchend", this.#_handleTouchEnd);
        const absDeltaX = Math.abs(this.touchDeltaX);
        if (absDeltaX > this.swipeThreshold) {
            this.slide(absDeltaX / this.touchDeltaX < 0 ? "next" : "prev");
            this.touchDeltaX = 0;
        }
    };
    #_handleMouseEnter = (evt) => {
        clearInterval(this.autoSildeTimer);
        this.isMouseInside = true;
    };
    #_handleMouseLeave = (evt) => {
        clearInterval(this.autoSildeTimer);
        if (this.element !== document.activeElement &&
            !this.element.contains(document.activeElement)) {
            this.autoSildeTimer = setInterval(() => {
                this.slide("next");
            }, this.autoSlideTime);
        }
        this.isMouseInside = false;
    };
    #_handleFocusIn = (evt) => {
        clearInterval(this.autoSildeTimer);
    };
    #_handleFocusOut = (evt) => {
        if (!evt.currentTarget.contains(evt.relatedTarget)) {
            clearInterval(this.autoSildeTimer);
            if (!this.isMouseInside) {
                this.autoSildeTimer = setInterval(() => {
                    this.slide("next");
                }, this.autoSlideTime);
            }
        }
    };
}
//# sourceMappingURL=index.js.map