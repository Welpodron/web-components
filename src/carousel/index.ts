// create interface to extend promise
interface DeferredPromise<T> extends Promise<T> {
  resolve: () => void;
}

export type Deferred = DeferredPromise<void>;

export const deferredPromise = () => {
  let outsideResolver: () => void;

  const promise: Partial<Deferred> = new Promise((innerResolver) => {
    outsideResolver = innerResolver;
  });
  // so if outsideResolver is called: outsideResolver() then promise will be fulfilled

  // add new property to returing promise so it can be finnised/fulfilled outside
  // name of new property can be whatever but not 'finally' ???

  promise.resolve = () => {
    outsideResolver();
  };

  return <Deferred>promise;
};

export class WelpodronCarousel {
  element: HTMLElement;
  translating: boolean = false;
  controls: NodeListOf<HTMLElement>;
  items: Array<Element>;
  currentItem: Element;
  // Carousel touch
  touchStartX: number = 0;
  touchDeltaX: number = 0;
  swipeThreshold: number = 45;
  // Carousel touch
  // Autoslide
  isMouseInside: boolean = false;
  autoSildeTimer;
  autoSlideTime: number = 4000;
  // Autoslide

  constructor(element: HTMLElement) {
    this.element = element;

    this.items = [
      ...this.element.querySelectorAll("[data-carousel-item]"),
    ].filter(
      (item) =>
        item.parentElement &&
        !item.parentElement.closest("[data-carousel-item]")
    );

    this.currentItem = this.items[0];

    this.items.forEach((item) => {
      if (item.getAttribute("data-active")) return (this.currentItem = item);
    });

    this.items.forEach((item) => {
      this.currentItem === item
        ? item.setAttribute("data-active", "")
        : item.removeAttribute("data-active");
    });

    this.controls = document.querySelectorAll(
      `[data-carousel-action][data-carousel-id=${this.element.id}]`
    );

    this.controls.forEach((control) => {
      control.removeEventListener("click", this.#_handleClick);
      control.addEventListener("click", this.#_handleClick);
    });

    // Carousel touch
    this.element.removeEventListener("touchstart", this.#_handleTouchStart);
    this.element.addEventListener("touchstart", this.#_handleTouchStart, {
      passive: true,
    });
    // Carousel touch

    // Autoslide
    this.element.removeEventListener("mouseenter", this.#_handleMouseEnter);
    this.element.removeEventListener("mouseleave", this.#_handleMouseLeave);
    this.element.removeEventListener("focusin", this.#_handleFocusIn);
    this.element.removeEventListener("focusout", this.#_handleFocusOut);
    this.element.addEventListener("mouseenter", this.#_handleMouseEnter);
    this.element.addEventListener("mouseleave", this.#_handleMouseLeave);
    this.element.addEventListener("focusin", this.#_handleFocusIn);
    this.element.addEventListener("focusout", this.#_handleFocusOut);
    this.autoSildeTimer = <number>(<unknown>setInterval(() => {
      this.slide("next");
    }, this.autoSlideTime));
    // Autoslide
  }

  getNextItem = (position: string) => {
    // next and prev are cycled
    // before and after are not
    const currentItemIndex = this.items.indexOf(this.currentItem);

    // So remainder operator aka %, by dividing by our array length, what we get is an index position that always stays within the bounds of our array
    if (position === "next") {
      return this.items[(currentItemIndex + 1) % this.items.length];
    }

    if (position === "prev") {
      return this.items[
        (currentItemIndex + this.items.length - 1) % this.items.length
      ];
    }

    if (position === "after") {
      return this.items[currentItemIndex + 1];
    }

    if (position === "before") {
      return this.items[currentItemIndex - 1];
    }

    return this.items[parseInt(position)];
  };

  getNextDirection = (nextItem: Element) => {
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

  slide = (position: string): void => {
    if (this.translating) return;

    const nextItem = this.getNextItem(position);

    if (!nextItem || nextItem === this.currentItem) return;

    this.translating = true;

    const nextDirection = this.getNextDirection(nextItem);

    const currentItemTransition = deferredPromise();
    const nextItemTransition = deferredPromise();

    nextItem.setAttribute("data-active", "");

    nextDirection === "left"
      ? nextItem.setAttribute("data-carosel-item-sliding-right", "")
      : nextItem.setAttribute("data-carosel-item-sliding-left", "");

    // Magic
    nextItem.scrollWidth;
    //
    nextDirection === "left"
      ? nextItem.removeAttribute("data-carosel-item-sliding-right")
      : nextItem.removeAttribute("data-carosel-item-sliding-left");

    nextDirection === "left"
      ? this.currentItem.setAttribute("data-carosel-item-sliding-left", "")
      : this.currentItem.setAttribute("data-carosel-item-sliding-right", "");

    setTimeout(() => {
      nextItem.addEventListener(
        "transitionend",
        () => {
          nextItemTransition.resolve();
        },
        { once: true }
      );
      nextItem.dispatchEvent(new TransitionEvent("transitionend"));
    }, parseFloat(window.getComputedStyle(nextItem).transitionDuration) * 1000);

    setTimeout(() => {
      this.currentItem.addEventListener(
        "transitionend",
        () => {
          this.currentItem.removeAttribute("data-active");
          nextDirection === "left"
            ? this.currentItem.removeAttribute("data-carosel-item-sliding-left")
            : this.currentItem.removeAttribute(
                "data-carosel-item-sliding-right"
              );
          currentItemTransition.resolve();
        },
        { once: true }
      );
      this.currentItem.dispatchEvent(new TransitionEvent("transitionend"));
    }, parseFloat(window.getComputedStyle(this.currentItem).transitionDuration) * 1000);

    Promise.all([currentItemTransition, nextItemTransition]).then(() => {
      this.currentItem = nextItem;
      this.translating = false;
    });
  };

  #_handleClick = (evt: Event): void => {
    evt.preventDefault();

    // Autoslide events
    // so if any of controls are pressed the cycle ends
    clearInterval(this.autoSildeTimer);
    // Autoslide events

    const currentTarget: Element = <Element>evt.currentTarget;
    const action: Function | any =
      this[
        <keyof WelpodronCarousel>(
          currentTarget.getAttribute("data-carousel-action")
        )
      ];
    const actionArgs: string | null = currentTarget.getAttribute(
      "data-carousel-action-args"
    );

    if (action instanceof Function) action(actionArgs);
  };

  // Carousel touch events
  #_handleTouchStart = (evt: TouchEvent): void => {
    this.touchStartX = evt.touches[0].clientX;
    this.element.removeEventListener("touchend", this.#_handleTouchEnd);
    this.element.addEventListener("touchend", this.#_handleTouchEnd);
    this.element.removeEventListener("touchmove", this.#_handleTouchMove);
    this.element.addEventListener("touchmove", this.#_handleTouchMove);
  };

  #_handleTouchMove = (evt: TouchEvent): void => {
    this.touchDeltaX =
      evt.touches && evt.touches.length > 1
        ? 0
        : evt.touches[0].clientX - this.touchStartX;
  };

  #_handleTouchEnd = (evt: TouchEvent): void => {
    this.element.removeEventListener("touchmove", this.#_handleTouchMove);
    this.element.removeEventListener("touchend", this.#_handleTouchEnd);

    const absDeltaX = Math.abs(this.touchDeltaX);

    if (absDeltaX > this.swipeThreshold) {
      // if absDeltaX / this.touchDeltaX < 0 slide to left
      // if absDeltaX / this.touchDeltaY > 0 slide to right
      this.slide(absDeltaX / this.touchDeltaX < 0 ? "next" : "prev");

      this.touchDeltaX = 0;
    }
  };
  // Carousel touch events
  // Autoslide events
  #_handleMouseEnter = (evt: Event): void => {
    clearInterval(this.autoSildeTimer);
    this.isMouseInside = true;
  };

  #_handleMouseLeave = (evt: Event): void => {
    clearInterval(this.autoSildeTimer);
    // Add timer only if carousel not in focus
    if (
      this.element !== document.activeElement &&
      !this.element.contains(document.activeElement)
    ) {
      this.autoSildeTimer = <number>(<unknown>setInterval(() => {
        this.slide("next");
      }, this.autoSlideTime));
    }

    this.isMouseInside = false;
  };

  #_handleFocusIn = (evt: FocusEvent): void => {
    clearInterval(this.autoSildeTimer);
  };

  #_handleFocusOut = (evt: FocusEvent): void => {
    if (!(<Element>evt.currentTarget).contains(<Element>evt.relatedTarget)) {
      clearInterval(this.autoSildeTimer);
      if (!this.isMouseInside) {
        // Add timer only if mouse is not over carousel
        this.autoSildeTimer = <number>(<unknown>setInterval(() => {
          this.slide("next");
        }, this.autoSlideTime));
      }
    }
  };
  // Autoslide events
}
