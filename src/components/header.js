class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header id="retour-haut">
      <div>
        <h1>
          <a href="index.html">L'instant Café</a>
        </h1>
        <form>
          <input type="search" name="q" placeholder="Rechercher sur le web" />
          <input type="submit" value="Spock le !" />
        </form>
      </div>
    </header>
    <nav>
    <ul>
      <li><a href="blog.html">Blog</a></li>
      <li>
        <a href="#">Veille Tech</a>
        <ul class="sous">
          <li>
            <a target="_blank" href="https://www.lafermeduweb.net/tag/html"
              >HTML</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.lafermeduweb.net/tag/css"
              >CSS</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.lafermeduweb.net/tag/javascript"
              >Javascript</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.lafermeduweb.net/tag/php"
              >PHP</a
            >
          </li>
        </ul>
      </li>
      <li class="deroulant">
        <a href="#">Mes Projets</a>
        <ul class="sous">
          <li>
            <a href="https://pignatone.com" target="_blank">PIGNATONE Bar</a>
          </li>
          <li>
            <a target="_blank" href="moncv.html" onclick="monBoutonClic();"
              >Mon CV</a
            >
          </li>
          <li><a href="https://ecrirepourlefutur.org" target="_blank">Ecrire pour le futur</a></li>
          <li><a href="#">Projet 4</a></li>
        </ul>
      </li>
    </ul>
  </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  