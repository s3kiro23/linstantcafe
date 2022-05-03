class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <p>
      ©Copyright by SpawnX. Tous droits réservés.
      <a data-contact="Vers page de contact" href="contact.html">Contact</a>
      <a data-propos="Vers page à propos" href="apropos.html">À Propos</a>
      <a data-cgu="Vers page CGU" href="cgu.html">CGU</a>
    </p>
  </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
