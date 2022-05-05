class buttonFixed extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container">
    <button class="pulse-button" "href="contact.html"></button>
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
