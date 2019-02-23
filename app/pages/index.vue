<template>
  <div class="card">
    <section>
      <h1>Biography</h1>
      <p>
        本名は花谷拓磨。大阪出身、新宿で活動する Web エンジニア。<br />
        Vue.js / Nuxt.js / React.js
        による、高度なユーザー体験を提供するためのインタラクション設計と持続可能性を考えたアーキテクチャ設計を前提とした
        SPA 開発、 PHP / Node.js によるバックエンド開発、 AWS や Firebase
        のクラウドをフル活用したアプリケーション開発を得意としています。<br />
        その他 Technical Writing, Web デザイン,
        イベント運営なども得意としており、積極的に活動を行っています。
      </p>
      <p><br />成果物は主に GitHub にてオープンソースで公開しています。</p>
    </section>

    <section>
      <h1>Career</h1>
      <ul>
        <li>
          <span class="career-name"
            >LINE<span class="carrer-history-sp">(18/12〜)</span></span
          >
          <span class="career-role">Engineer</span>
          <span class="carrer-history">(18/12〜)</span>
        </li>
        <li>
          <span class="career-name"
            >ElevenBack<span class="carrer-history-sp">(17/07〜)</span></span
          >
          <span class="career-role">代表</span>
          <span class="carrer-history">(17/07〜)</span>
        </li>
        <li>
          <span class="career-name"
            >Increments inc.<span class="carrer-history-sp"
              >(18/03〜18/10)</span
            ></span
          >
          <span class="career-role">エンジニア(subcontractor)</span>
          <span class="carrer-history">(18/03〜18/10)</span>
        </li>
        <li>
          <span class="career-name"
            >pixiv inc.<span class="carrer-history-sp"
              >(17/04〜17/07)</span
            ></span
          >
          <span class="career-role">エンジニア</span>
          <span class="carrer-history">(17/04〜17/07)</span>
        </li>
        <li>
          <span class="career-name"
            >SCOUTER inc.<span class="carrer-history-sp"
              >(16/04〜16/10)</span
            ></span
          >
          <span class="career-role">エンジニア・マネージャ</span>
          <span class="carrer-history">(16/04〜16/10)</span>
        </li>
      </ul>
    </section>

    <section>
      <h1>Community &amp; Events &amp; OSS</h1>
      <ul>
        <li>
          <span class="community-name">FRONTEND CONFERENCE 2017</span>
          <span class="community-role">Organizer</span>
        </li>
        <li>
          <span class="community-name">JSLounge</span>
          <span class="community-role">Organizer</span>
        </li>
        <li>
          <span class="community-name">Vue.js Japan User Group</span>
          <span class="community-role">Member</span>
        </li>
        <li>
          <span class="community-name">Vue.js Fes Japan 2018</span>
          <span class="community-role">Staff</span>
        </li>
        <li>
          <span class="community-name">reactjs/ja.reactjs.org</span>
          <span class="community-role">Primary Maintainer</span>
        </li>
        <li>
          <span class="community-name">vuejs/jp.vuejs.org</span>
          <span class="community-role">Primary Maintainer</span>
        </li>
        <li>
          <span class="community-name">WordBench Kyoto</span>
          <span class="community-role">Moderator</span>
        </li>
      </ul>
    </section>

    <section>
      <h1>Products</h1>
      <dl>
        <dt>Internet programming - DTP Design / Writing</dt>
        <dd>
          <span>C94 Doujin book</span><br />
          <span class="link"
            ><a
              href="https://okimoti.booth.pm/items/1003204"
              target="_blank"
              rel="noopener"
              >https://okimoti.booth.pm/items/1003204</a
            ></span
          >
        </dd>

        <dt>connpassport - Nuxt.js / AWS Lambda</dt>
        <dd>
          <span>Unofficial connpass mobile acceptance system.</span><br />
          <span class="link"
            ><a href="https://connpassport.com/" target="_blank" rel="noopener"
              >https://connpassport.com/</a
            ></span
          >
        </dd>

        <dt>SeQueue - Nuxt.js / Express(TypeORM,puppeteer,Vue SSR)</dt>
        <dd>
          <span>フリーランスのための請求書クラウド</span><br />
          <span class="link"
            ><a href="https://sequeue.jp" target="_blank" rel="noopener"
              >https://sequeue.jp</a
            ></span
          >
        </dd>

        <dt>Contributter - Ruby on Rails</dt>
        <dd>
          <span>Let's tweet your contributions.</span><br />
          <span class="link"
            ><a
              href="https://contributter.potato4d.me"
              target="_blank"
              rel="noopener"
              >https://contributter.potato4d.me</a
            ></span
          >
        </dd>

        <dt>Qiita Feed Gen - Next.js</dt>
        <dd>
          <span>Qiita private feed rss converter.</span><br />
          <span class="link"
            ><a
              href="https://qiita-feed-gen.potato4d.me"
              target="_blank"
              rel="noopener"
              >https://qiita-feed-gen.potato4d.me</a
            ></span
          >
        </dd>

        <dt>Nuxt tech book - Writing</dt>
        <dd>
          <span>Nuxt technical book</span>
          <span class="link"
            ><a
              href="https://potato4d.booth.pm/items/824745"
              target="_blank"
              rel="noopener"
              >https://potato4d.booth.pm/items/824745</a
            ></span
          >
        </dd>

        <dt>JSLounge - Event Organize</dt>
        <dd>
          <span>「週末の渋谷で一歩ずつステップアップ」をサポートする団体</span
          ><br />
          <span class="link"
            ><a
              href="https://jslounge.connpass.com/"
              target="_blank"
              rel="noopener"
              >https://jslounge.connpass.com/</a
            ></span
          >
        </dd>
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

<script>
export default {
  transition: 'card',
  computed: {
    activities() {
      return [
        {
          title:
            '【登壇】持続可能なプロダクト開発のために - フロントエンドと新陳代謝の話',
          source: 'HTML5 Conference 2018',
          link:
            'https://speakerdeck.com/potato4d/frontend-premised-on-making-changes'
        },
        {
          title:
            '【登壇】破綻しない Vue.js アプリケーション開発のために大切なこと',
          source: 'JSLounge at UUUM',
          link:
            'https://speakerdeck.com/potato4d/how-to-make-a-robust-vue-dot-js-application'
        },
        {
          title: '【執筆】Nuxt.js ビギナーズガイド',
          source: 'C&R研究所',
          show_link: 'https://www.amazon.co.jp/gp/product/4863542569/',
          link: 'https://amzn.to/2Qol7eZ'
        },
        {
          title: '【査読】Vue.js 入門',
          source: '技術評論社',
          show_link: 'https://www.amazon.co.jp/gp/product/4297100916/',
          link: 'https://amzn.to/2Oric3P'
        },
        {
          title: '【登壇】Vue.js プロジェクトの爆発させかた',
          source: '市ヶ谷Geek★Night',
          link:
            'https://speakerdeck.com/potato4d/how-to-explosion-vue-dot-js-project'
        },
        {
          title: '【登壇】「結局Nuxt.jsって何がいいの？」に対する回答',
          source: 'Vue.js meetup #7 メインセッション',
          link: 'https://slides.com/potato4d/vuejs_meetup7'
        },
        {
          title:
            '【執筆】Vue.js製フレームワークNuxt.jsではじめるUniversalアプリケーション開発',
          source: 'HTML5 Experts.jp',
          link: 'https://html5experts.jp/potato4d/24346/'
        },
        {
          title:
            '【登壇】「現代におけるプロダクト開発とPHPを選定するワケ 」（再演）',
          source: 'PHPカンファレンス2017Kansai',
          link:
            'https://speakerdeck.com/potato4d/xian-dai-niokerupurodakutokai-fa-tophpwoxuan-ding-suruwake-at-tokyo-number-phpcon2017'
        },
        {
          title: '【執筆】「完全HTTPS化のメリットと極意を大規模Webサービス」',
          source: 'ITmedia(@IT)',
          link: 'http://www.atmarkit.co.jp/ait/articles/1707/13/news010.html'
        },
        {
          title: '【登壇】「Draft.jsによる 統制のとれたテキスト編集の世界」',
          source: '初夏のJavaScript祭 in mixi',
          link:
            'https://speakerdeck.com/potato4d/draft-dot-jsniyoru-tong-zhi-falsetoretatekisutobian-ji-falseshi-jie-number-jsfes'
        },
        {
          title: '【登壇】「あらゆる人のためのフロントエンド」',
          source: 'FRONTEND CONFERENCE 2017 基調講演',
          link:
            'https://speakerdeck.com/potato4d/arayururen-falsetamefalsehurontoendo-number-frontkansai'
        }
      ]
    }
  }
}
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
  align-items: center;
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
}

.card ul li .career-role {
  flex: 1;
}

.card ul li .carrer-history {
  width: 105px;
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
