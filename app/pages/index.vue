<template>
  <div>
    <div class="main">
      <header>
        <img src="https://github.com/potato4d.png" alt class="icon" />
      </header>

      <div class="container">
        <div class="title">
          <h1>potato4d</h1>
          <p>NIGIYAKASHI</p>
        </div>
        <div class="card">
          <section>
            <h1>Biography</h1>
            <p>
              本名は花谷拓磨。関西出身、新宿で活動する Web エンジニア。
              <br />Vue.js / Nuxt.js / React.js
              による、高度なユーザー体験を提供するためのインタラクション設計と持続可能性を考えたアーキテクチャ設計を前提とした
              SPA 開発、 PHP / Node.js によるバックエンド開発、 AWS や Firebase
              のクラウドをフル活用したアプリケーション開発を得意としています。
              <br />その他、技術文書の執筆や Web
              デザイン、イベント運営なども得意としており、積極的に活動を行っています。
            </p>
            <p>
              <br />成果物は主に GitHub にてオープンソースで公開しています。
            </p>
            <p><br />ご連絡は mail@potato4d.me まで。</p>
          </section>

          <section>
            <h1>Career</h1>
            <ul>
              <li v-for="career in careeres">
                <span class="career-name">
                  {{ career.title }}
                  <span class="carrer-history-sp">({{ career.range }})</span>
                </span>
                <span class="career-role" v-html="career.role"> </span>
                <span class="carrer-history">({{ career.range }})</span>
              </li>
            </ul>
          </section>

          <section>
            <h1>Community &amp; Events &amp; OSS</h1>
            <ul>
              <li v-for="community in communities" :key="community.name">
                <span class="community-name">{{ community.name }}</span>
                <span class="community-role">{{ community.role }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h1>Products</h1>
            <dl>
              <template v-for="product in products">
                <dt :key="product.title + 'name'">
                  {{ product.title }} - {{ product.stack }}
                </dt>
                <dd :key="product.title + 'detail'">
                  <template v-if="product.about">
                    <span>{{ product.about }}</span>
                    <br />
                  </template>
                  <span class="link">
                    <a :href="product.link_url" target="_blank" rel="noopener">
                      {{ product.url }}
                    </a>
                  </span>
                </dd>
              </template>
            </dl>
          </section>

          <section>
            <h1>Latest Activities</h1>
            <dl>
              <template v-for="activity in activities">
                <dt :key="activity.title + 'dt'">{{ activity.title }}</dt>
                <dd :key="activity.title + 'dd'">
                  <span>{{ activity.source }}</span>
                  <br />
                  <span class="link">
                    <a :href="activity.link" target="_blank" rel="noopener">{{
                      activity.show_link || activity.link
                    }}</a>
                  </span>
                </dd>
              </template>
            </dl>
          </section>
        </div>
      </div>
    </div>

    <footer>
      <a href="https://twitter.com/potato4d" target="_blank" rel="noopener">
        <img src="/tweet.svg" alt="Twitter" width="30" />
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { activities, products, communities, careeres } from '../assets/source'

export default Vue.extend({
  computed: {
    activities() {
      return activities
    },
    products() {
      return products
    },
    communities() {
      return communities
    },
    careeres() {
      return careeres
    }
  }
})
</script>

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

.card p,
.card dl,
.card ul {
  color: #946f6f;
}

.card ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.card ul li {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-left: 24px;
  position: relative;
  margin: 5px 0;
}

.card ul li::before {
  position: absolute;
  left: 9px;
  top: 10px;
  width: 6px;
  height: 6px;
  background: #f27675;
  content: '';
  display: block;
}

.card ul li span {
  display: block;
}

.card ul li .career-name {
  width: 100px;
  display: block;
  height: 100%;
}

.card ul li .career-role {
  flex: 1;
}

.card ul li .carrer-history {
  width: 105px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.card ul li .community-name {
  width: 200px;
}

.card ul li .community-role {
  flex: 1;
  text-align: right;
}

.card dl dt {
  font-size: 15px;
}

.card dl dd {
  font-size: 13px;
  letter-spacing: 1.2px;
  margin-top: 4px;
  margin-bottom: 10px;
}

.card ul li .carrer-history-sp {
  display: none;
}

.card .link a {
  font-size: 12px;
  color: #1d75f2;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}

@media (max-width: 460px) {
  .card ul li {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .card ul li .career-name {
    width: 100%;
  }

  .card ul li .carrer-history {
    display: none;
  }

  .card ul li .carrer-history-sp {
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
