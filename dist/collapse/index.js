export class WelpodronCollapse {
    element;
    active;
    translating = false;
    controls;
    accordionSiblings;
    constructor(element) {
        this.element = element;
        this.element.collapseInstance = this;
        this.active = this.element.getAttribute("data-active") !== null;
        this.controls = document.querySelectorAll(`[data-collapse-action][data-collapse-id=${this.element.id}]`);
        this.controls.forEach((control) => {
            control.setAttribute("aria-expanded", this.active.toString());
            control.setAttribute("aria-controls", this.element.id);
            control.removeEventListener("click", this.#_handleClick);
            control.addEventListener("click", this.#_handleClick);
        });
        this.accordionSiblings = document.querySelectorAll(`[data-collapse]:not([id=${this.element.id}])[data-accordion-id=${this.element.getAttribute("data-accordion-id")}]`);
    }
    open = () => {
        if (this.translating || this.active)
            return;
        if ([...this.accordionSiblings].some((sibling) => sibling.collapseInstance.translating))
            return;
        this.accordionSiblings.forEach((sibling) => {
            sibling.collapseInstance.close();
        });
        this.translating = true;
        this.element.setAttribute("data-collapse-collapsing", "");
        setTimeout(() => {
            this.element.addEventListener("transitionend", () => {
                this.element.removeAttribute("data-collapse-collapsing");
                this.element.style.height = "";
                this.active = true;
                this.controls.forEach((control) => {
                    control.setAttribute("aria-expanded", this.active.toString());
                });
                this.translating = false;
            }, { once: true });
            this.element.dispatchEvent(new TransitionEvent("transitionend"));
        }, parseFloat(window.getComputedStyle(this.element).transitionDuration) * 1000);
        this.element.setAttribute("data-active", "");
        this.element.style.height = `${this.element.scrollHeight}px`;
    };
    close = () => {
        if (this.translating || !this.active)
            return;
        this.translating = true;
        this.element.style.height = `${this.element.getBoundingClientRect().height}px`;
        this.element.setAttribute("data-collapse-collapsing", "");
        this.element.removeAttribute("data-active");
        this.element.scrollHeight;
        setTimeout(() => {
            this.element.addEventListener("transitionend", () => {
                this.element.removeAttribute("data-collapse-collapsing");
                this.active = false;
                this.controls.forEach((control) => {
                    control.setAttribute("aria-expanded", this.active.toString());
                });
                this.translating = false;
            }, { once: true });
            this.element.dispatchEvent(new TransitionEvent("transitionend"));
        }, parseFloat(window.getComputedStyle(this.element).transitionDuration) * 1000);
        this.element.style.height = "";
    };
    toggle = () => {
        if (this.translating)
            return;
        this.active ? this.close() : this.open();
    };
    #_handleClick = (evt) => {
        evt.preventDefault();
        const currentTarget = evt.currentTarget;
        const action = this[(currentTarget.getAttribute("data-collapse-action"))];
        if (action instanceof Function)
            action();
    };
}
//# sourceMappingURL=index.js.map