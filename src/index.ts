export class CurrentYear extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const date = new Date();
    const year = date.getFullYear();

    const span = document.createElement("span");
    span.innerHTML = "" + year;

    this.appendChild(span);
  }
}

customElements.define("current-year", CurrentYear);
