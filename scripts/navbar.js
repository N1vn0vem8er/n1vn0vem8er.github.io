class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
  <div class="wrapper">
    <div class="logo"><a href="#">N1vn0vem8er</a></div>
    <input type="radio" name="slider" id="menu-btn">
    <input type="radio" name="slider" id="close-btn">
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      <li><a href="/">Home</a></li>
      <li><a href="/pages/about-page.html">About</a></li>
      <li>
        <a href="#" class="desktop-item">Projects</a>
        <input type="checkbox" id="showMega">
        <label for="showMega" class="mobile-item">Projects</label>
        <div class="mega-box">
          <div class="content">
            <div class="row">
              <header>Developer tools</header>
              <ul class="mega-links">
                <li><a href="/pages/8080ide-page.html">8080 IDE</a></li>
                <li><a href="/pages/cutetoolbox-page.html">Cute Toolbox</a></li>
                <li><a href="/pages/cppeasyrun-page.html">CppEasyRun</a></li>
              </ul>
            </div>
            <div class="row">
              <header>Desktop applications</header>
              <ul class="mega-links">
                <li><a href="/pages/pineconesnake-page.html">Pinecone Snake</a></li>
                <li><a href="/pages/recipsimplgo-page.html">Recipsimplgo</a></li>
              </ul>
            </div>
            <div class="row">
              <header>Other</header>
              <ul class="mega-links">
                <li><a href="https://github.com/N1vn0vem8er/verysimplepowermenu" target="_blank">Very Simple Power Menu</a></li>
                <li><a href="https://github.com/N1vn0vem8er/analogclockwidget" target="_blank">Analog Clock Widget</a></li>
                <li><a href="https://github.com/N1vn0vem8er/usbdatasender" target="_blank">Usb data sender</a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
  </div>
</nav>`;
  }
}
customElements.define('main-navbar', MainNavbar);
