class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
      <p>
        ©Copyright by SpawnX. Tous droits réservés.
        <a href="pages/contact.html">Contact</a>
        <a href="pages/apropos.html">À Propos</a>
        <a href="pages/cgu.html">CGU</a>
      </p>
    </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
