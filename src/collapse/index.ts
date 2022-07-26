export interface IWelpodronCollapseHTMLElement extends HTMLElement {
  collapseInstance: WelpodronCollapse;
}

// TODO: Maybe rewrite accordion section like carousel one?

export class WelpodronCollapse {
  element: IWelpodronCollapseHTMLElement;
  active: boolean;
  translating: boolean = false;
  controls: NodeListOf<HTMLElement>;
  // Accordion API
  accordionSiblings: NodeListOf<IWelpodronCollapseHTMLElement>;
  // Accordion API

  constructor(element: IWelpodronCollapseHTMLElement) {
    this.element = element;

    this.element.collapseInstance = this;

    this.active = this.element.getAttribute("data-active") !== null;

    this.controls = document.querySelectorAll(
      `[data-collapse-action][data-collapse-id=${this.element.id}]`
    );

    this.controls.forEach((control) => {
      control.setAttribute("aria-expanded", this.active.toString());
      control.setAttribute("aria-controls", this.element.id);
      control.removeEventListener("click", this.#_handleClick);
      control.addEventListener("click", this.#_handleClick);
    });

    // Accordion API
    this.accordionSiblings = document.querySelectorAll(
      `[data-collapse]:not([id=${
        this.element.id
      }])[data-accordion-id=${this.element.getAttribute("data-accordion-id")}]`
    );
    // Accordion API
  }

  open = (): void => {
    if (this.translating || this.active) return;
    // Accordion API
    if (
      [...this.accordionSiblings].some(
        (sibling) => sibling.collapseInstance.translating
      )
    )
      return;

    this.accordionSiblings.forEach((sibling) => {
      sibling.collapseInstance.close();
    });
    // Accordion API

    this.translating = true;
    this.element.setAttribute("data-collapse-collapsing", "");
    setTimeout(() => {
      this.element.addEventListener(
        "transitionend",
        () => {
          this.element.removeAttribute("data-collapse-collapsing");
          this.element.style.height = "";
          this.active = true;
          this.controls.forEach((control) => {
            control.setAttribute("aria-expanded", this.active.toString());
          });
          this.translating = false;
        },
        { once: true }
      );
      this.element.dispatchEvent(new TransitionEvent("transitionend"));
    }, parseFloat(window.getComputedStyle(this.element).transitionDuration) * 1000);
    this.element.setAttribute("data-active", "");
    this.element.style.height = `${this.element.scrollHeight}px`;
  };

  close = (): void => {
    if (this.translating || !this.active) return;
    this.translating = true;
    this.element.style.height = `${
      this.element.getBoundingClientRect().height
    }px`;
    this.element.setAttribute("data-collapse-collapsing", "");
    this.element.removeAttribute("data-active");
    // Magic
    this.element.scrollHeight;
    //
    setTimeout(() => {
      this.element.addEventListener(
        "transitionend",
        () => {
          this.element.removeAttribute("data-collapse-collapsing");
          this.active = false;
          this.controls.forEach((control) => {
            control.setAttribute("aria-expanded", this.active.toString());
          });
          this.translating = false;
        },
        { once: true }
      );
      this.element.dispatchEvent(new TransitionEvent("transitionend"));
    }, parseFloat(window.getComputedStyle(this.element).transitionDuration) * 1000);
    this.element.style.height = "";
  };

  toggle = (): void => {
    if (this.translating) return;
    this.active ? this.close() : this.open();
  };

  #_handleClick = (evt: Event): void => {
    evt.preventDefault();

    const currentTarget: Element = <Element>evt.currentTarget;
    const action: Function | any =
      this[
        <keyof WelpodronCollapse>(
          currentTarget.getAttribute("data-collapse-action")
        )
      ];
    // const actionArgs: string | null = currentTarget.getAttribute(
    //   "data-collapse-action-args"
    // );

    if (action instanceof Function) action(/*actionArgs*/);
  };
}
