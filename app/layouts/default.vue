<template>
  <div>
    <div class="main">
      <header>
        <img src="https://github.com/potato4d.png" alt="" class="icon" />
      </header>

      <div class="container">
        <div class="title">
          <h1>Potato4d</h1>
          <p>NIGIYAKASHI</p>
        </div>

        <nav>
          <ul>
            <li><router-link to="/" exact>ABOUT ME</router-link></li>
            <li><router-link to="/accounts">ACCOUNTS</router-link></li>
            <li><router-link to="/contact">CONTACT</router-link></li>
          </ul>
        </nav>

        <nuxt />
      </div>
    </div>

    <footer>
      <a href="https://twitter.com/potato4d" target="_blank" rel="noopener">
        <img src="/tweet.svg" alt="Twitter" width="30" />
      </a>
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: Makinas;
  font-style: normal;
  src: url('/fonts/Makinas-Flat-3.otf');
}

@font-face {
  font-family: Makinas;
  font-style: bold;
  src: url('/fonts/Makinas-Flat-5.otf');
}

.card-enter-active {
  animation: card-in 0.4s;
}

@keyframes card-in {
  0% {
    transform: translate(0, 10px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

html {
  font-family: Makinas, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f9f9f9;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

header {
  width: 100%;
  height: 130px;
  background: #f06a6a;
  border-bottom: solid 20px #fff;
  position: relative;
}

header .icon {
  width: 134px;
  height: 134px;
  border-radius: 50%;
  border: solid 8px #fff;
  position: absolute;
  left: calc(50% - 67px);
  bottom: -67px;
}

.main {
  width: 100%;
  min-height: calc(100vh - 60px);
}

.title {
  margin-top: 65px;
  text-align: center;
  letter-spacing: 1px;
}

.title h1 {
  color: #d80000;
  font-size: 40px;
  line-height: 1;
  font-weight: normal;
}

.title p {
  color: #946f6f;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 10px 0 5px;
}

nav ul {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li {
  width: 126px;
  height: 30px;
  border-radius: 4px;
  margin: 0;
  padding: 0;

  align-items: center;
  justify-content: center;

  overflow: hidden;
}

nav ul li a {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  letter-spacing: 1.2px;
  transition: all 0.1s ease-out;
}

nav ul li a {
  color: #d80000;
  background: #fff;
}

nav ul li a:hover,
nav ul li a.nuxt-link-active {
  color: #fff;
  background: #f06c6c;
}

.container {
  max-width: 460px;
  margin: 0 auto;
}

.card {
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.card p {
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 1.6px;
}

section h1 {
  color: #d80000;
  font-size: 18px;
  letter-spacing: 1px;
  border-bottom: solid 2px #d80000;
  font-weight: normal;
  margin-top: 10px;
  margin-bottom: 15px;
}

section:first-child h1 {
  margin-top: 0;
}

footer {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4f2929;
}

@media (max-width: 460px) {
  nav ul li {
    width: 90px;
  }

  nav ul li a {
    font-size: 14px;
  }

  .container {
    max-width: calc(100% - 30px);
  }
  footer {
    height: 50px;
  }
}
</style>
