class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <p>
      ©Copyright by SpawnX. Tous droits réservés.
      <a href="contact.html">Contact</a>
      <a href="apropos.html">À Propos</a>
      <a href="cgu.html">CGU</a>
    </p>
  </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
