<template>
  <div>
    <div class="main">
      <header>
        <img src="~/assets/icon.jpg" alt="" class="icon">
      </header>

      <div class="container">
        <div class="title">
          <h1>Potato4d</h1>
          <p>NIGIYAKASHI</p>
        </div>

        <nav>
          <ul>
            <li><a href="#">ABOUT ME</a></li>
            <li><a href="#">ACCOUNTS</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>

        <nuxt/>
      </div>
    </div>

    <footer>
      <a href="#">
        <img src="~/assets/tweet.svg" alt="Twitter">
      </a>
    </footer>
  </div>
</template>

<style>
html {
  font-family: Makinas, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #F9F9F9;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

header{
  width: 100%;
  height: 130px;
  background: #F06A6A;
  border-bottom: solid 20px #fff;
  position: relative;
}

header .icon{
  width: 134px;
  height: 134px;
  border-radius: 50%;
  border: solid 8px #fff;
  position: absolute;
  left: calc(50% - 67px);
  bottom: -67px;
}

.main{
  width: 100%;
  min-height: calc(100vh - 60px);
}

.title{
  margin-top: 65px;
  text-align: center;
  letter-spacing: 1.0px;
}

.title h1{
  color: #D80000;
  font-size: 40px;
  line-height: 1.0;
  font-weight: normal;
}

.title p{
  color: #946F6F;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 10px 0 5px;
}

nav ul{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li{
  width: 126px;
  height: 30px;
  border-radius: 4px;
  margin: 0;
  padding: 0;

  align-items: center;
  justify-content: center;

  overflow: hidden;
}

nav ul li a{
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

nav ul li a{
  color: #D80000;
  background: #fff;
}

nav ul li a:hover,
nav ul li a.active{
  color: #fff;
  background: #F06C6C;
}

.container{
  max-width: 460px;
  margin: 0 auto;
}

.card{
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.card p{
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 1.6px;
}

section h1{
  color: #D80000;
  font-size: 18px;
  letter-spacing: 1.0px;
  border-bottom: solid 2px #D80000;
  font-weight: normal;
  margin-top: 10px;
  margin-bottom: 15px;
}

section:first-child h1{
  margin-top: 0;
}

footer{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4F2929;
}

@media (max-width: 460px) {
  .container {
    max-width: calc(100% - 30px);
  }
  footer{
    height: 50px;
  }
}
</style>
