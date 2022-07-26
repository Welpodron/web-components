export class WelpodronTabs {
    element;
    translating = false;
    controls;
    items;
    currentItem;
    constructor(element) {
        this.element = element;
        this.items = [...this.element.querySelectorAll("[data-tabs-item]")].filter((item) => item.parentElement && !item.parentElement.closest("[data-tabs-item]"));
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
        this.controls = document.querySelectorAll(`[data-tabs-action][data-tabs-id=${this.element.id}]`);
        this.controls.forEach((control) => {
            control.setAttribute("role", "tab");
            control.removeEventListener("click", this.#_handleClick);
            control.addEventListener("click", this.#_handleClick);
        });
    }
    show = (position) => {
        if (this.translating)
            return;
        const nextItem = this.items[parseInt(position)];
        if (!nextItem || nextItem === this.currentItem)
            return;
        this.translating = true;
        this.currentItem.setAttribute("data-tabs-item-fading", "");
        this.currentItem.removeAttribute("data-active");
        setTimeout(() => {
            this.currentItem.addEventListener("transitionend", () => {
                this.currentItem.removeAttribute("data-tabs-item-fading");
                nextItem.setAttribute("data-tabs-item-fading", "");
                nextItem.scrollHeight;
                nextItem.setAttribute("data-active", "");
                nextItem.removeAttribute("data-tabs-item-fading");
                setTimeout(() => {
                    nextItem.addEventListener("transitionend", () => {
                        this.currentItem = nextItem;
                        this.translating = false;
                    }, { once: true });
                    nextItem.dispatchEvent(new TransitionEvent("transitionend"));
                }, parseFloat(window.getComputedStyle(nextItem).transitionDuration) * 1000);
            }, { once: true });
            this.currentItem.dispatchEvent(new TransitionEvent("transitionend"));
        }, parseFloat(window.getComputedStyle(this.currentItem).transitionDuration) * 1000);
    };
    #_handleClick = (evt) => {
        evt.preventDefault();
        const currentTarget = evt.currentTarget;
        const action = this[currentTarget.getAttribute("data-tabs-action")];
        const actionArgs = currentTarget.getAttribute("data-tabs-action-args");
        if (action instanceof Function)
            action(actionArgs);
    };
}
//# sourceMappingURL=index.js.map