class buttonFixed extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="cercle">
    <a href="contact.html"
      ><img src="assets/img/at-solid.svg" alt="bouton-contact"
    /></a>
    </div>
    <div class="boutonBack">
    <a href="#retour-haut"
      ><img src="assets/img/up-arrow-white.png" alt="retour-haut"
    /></a>
  </div>
        `;
  }
}

customElements.define("button-fixed", buttonFixed);
