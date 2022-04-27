class buttonFixed extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="boutonBack">
            <a href="#retour-haut"><img src="assets/img/up-arrow.png" alt="" /></a>
        </div>
        <div class="ear-right" ></div>
        <button class="buttonContact">
            <a href="contact.html"
            ><img src="assets/img/at-solid.svg" alt="bouton-contact"
            /></a>
        </button>`;
  }
}

customElements.define("button-fixed", buttonFixed);
