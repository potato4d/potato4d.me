<template>
  <div class="card">
    <section>
      <h1>Biography</h1>
      <p>
        本名は花谷拓磨。関西出身、新宿で活動する Web エンジニア。<br />
        Vue.js / Nuxt.js / React.js
        による、高度なユーザー体験を提供するためのインタラクション設計と持続可能性を考えたアーキテクチャ設計を前提とした
        SPA 開発、 PHP / Node.js によるバックエンド開発、 AWS や Firebase
        のクラウドをフル活用したアプリケーション開発を得意としています。<br />
        その他、技術文書の執筆や Web
        デザイン、イベント運営なども得意としており、積極的に活動を行っています。
      </p>
      <p><br />成果物は主に GitHub にてオープンソースで公開しています。</p>
      <p>
        連絡は mail@potato4d.me まで。
      </p>
    </section>

    <section>
      <h1>Career</h1>
      <ul>
        <li>
          <span class="career-name"
            >LINE<span class="carrer-history-sp">(18/12〜)</span></span
          >
          <span class="career-role"
            >Senior Front-End Engineer<br />Developer Relations</span
          >
          <span class="carrer-history">(18/12〜)</span>
        </li>
        <li>
          <span class="career-name"
            >ElevenBack<span class="carrer-history-sp">(17/07〜)</span></span
          >
          <span class="career-role">President</span>
          <span class="carrer-history">(17/07〜)</span>
        </li>
        <li>
          <span class="career-name"
            >Increments inc.<span class="carrer-history-sp"
              >(18/03〜18/10)</span
            ></span
          >
          <span class="career-role">Engineer(subcontractor)</span>
          <span class="carrer-history">(18/03〜18/10)</span>
        </li>
        <li>
          <span class="career-name"
            >pixiv inc.<span class="carrer-history-sp"
              >(17/04〜17/07)</span
            ></span
          >
          <span class="career-role">Engineer</span>
          <span class="carrer-history">(17/04〜17/07)</span>
        </li>
        <li>
          <span class="career-name"
            >SCOUTER inc.<span class="carrer-history-sp"
              >(16/04〜16/10)</span
            ></span
          >
          <span class="career-role">Engineer<br />Project Manager</span>
          <span class="carrer-history">(16/04〜16/10)</span>
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
              <span>{{ product.about }}</span
              ><br />
            </template>
            <span class="link"
              ><a :href="product.link_url" target="_blank" rel="noopener">{{
                product.url
              }}</a></span
            >
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
            <span>{{ activity.source }}</span
            ><br />
            <span class="link">
              <a :href="activity.link" target="_blank" rel="noopener">
                {{ activity.show_link || activity.link }}
              </a>
            </span>
          </dd>
        </template>
      </dl>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { activities, products, communities } from '../assets/source'

export default Vue.extend({
  transition: 'card',
  computed: {
    activities() {
      return activities
    },
    products() {
      return products
    },
    communities() {
      return communities
    }
  }
})
</script>

<style scoped>
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
