class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer-main">
      <div class="footer-copyright"><p>©Copyright by SpawnX. Tous droits réservés.</p></div>
      <div class="footer-pages">
        <ul class="footer-pages__list">
          <li><a class="footer-pages__link" href="contact.html">Contact</a></li>
          <li><a class="footer-pages__link" href="apropos.html">À Propos</a></li>
          <li><a class="footer-pages__link" href="cgu.html">CGU</a></li>
        </ul>
      </div>
      <div class="footer-socials">
        <ul class="footer-socials__list">
          <li>
            <a class="footer-socials__link" href="#"><img src="assets/img/facebook-square.png" alt="ico-fb"/></a>
          </li>
          <li>
            <a class="footer-socials__link" href="#"><img src="assets/img/github-square.png" alt="ico-git" /></a>
          </li>
          <li>
            <a class="footer-socials__link" href="#"><img src="assets/img/linkedin.png" alt="ico-link" /></a>
          </li>
        </ul>
      </div>
    </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
