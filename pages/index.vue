<template>
  <div class="card">
    <section>
      <h1>Biography</h1>
      <p>
        本名は花谷拓磨。大阪出身渋谷在住のWebエンジニア。<br>
        Vue.jsやReact.jsをはじめとしたフロントエンドから、PHPによるサーバーサイド開発、デザイン業務からライター業、はたまたITイベントでのお祭り男までオールマイティーに活動している賑やかしです。
      </p>
    </section>

    <section>
      <h1>Career</h1>
      <ul>
        <li>
          <span class="career-name">ElevenBack<span class="carrer-history-sp">(17/07〜)</span></span>
          <span class="carrer-role">代表</span>
          <span class="carrer-history">(17/07〜)</span>
        </li>
        <li>
          <span class="career-name">GNEX ltd.<span class="carrer-history-sp">(17/01〜)</span></span>
          <span class="carrer-role">エンジニア</span>
          <span class="carrer-history">(17/01〜)</span>
        </li>
        <li>
          <span class="career-name">pixiv inc.<span class="carrer-history-sp">(17/04〜17/07)</span></span>
          <span class="carrer-role">エンジニア</span>
          <span class="carrer-history">(17/04〜17/07)</span>
        </li>
        <li>
          <span class="career-name">SCOUTER inc.<span class="carrer-history-sp">(16/04〜16/10)</span></span>
          <span class="carrer-role">エンジニア・マネージャ</span>
          <span class="carrer-history">(16/04〜16/10)</span>
        </li>
      </ul>
    </section>
    <section>
      <h1>Latest Activities</h1>
      <dl>
        <dt>【登壇】「現代におけるプロダクト開発とPHPを選定するワケ 」</dt>
        <dd>
          <span>PHPカンファレンス2017Kansai</span><br>
          <span class="link"><a href="https://speakerdeck.com/potato4d/xian-dai-niokerupurodakutokai-fa-tophpwoxuan-ding-suruwake-number-phpkansai" target="_blank" rel="noopener" >https://speakerdeck.com/potato4d/xian-dai-niokerupurodakutokai-fa-tophpwoxuan-ding-suruwake-number-phpkansai</a></span>
        </dd>

        <dt>【執筆】「完全HTTPS化のメリットと極意を大規模Webサービス」</dt>
        <dd>
          <span>ITmedia(@IT)</span><br>
          <span class="link"><a href="http://www.atmarkit.co.jp/ait/articles/1707/13/news010.html" target="_blank" rel="noopener" >http://www.atmarkit.co.jp/ait/articles/1707/13/news010.html</a></span>
        </dd>

        <dt>【登壇】「Draft.jsによる 統制のとれたテキスト編集の世界」</dt>
        <dd>
          <span>初夏のJavaScript祭 in mixi</span><br>
          <span class="link"><a href="https://speakerdeck.com/potato4d/draft-dot-jsniyoru-tong-zhi-falsetoretatekisutobian-ji-falseshi-jie-number-jsfes" target="_blank" rel="noopener" >https://speakerdeck.com/potato4d/draft-dot-jsniyoru-tong-zhi-falsetoretatekisutobian-ji-falseshi-jie-number-jsfes</a></span>
        </dd>

        <dt>【登壇】「あらゆる人のためのフロントエンド」</dt>
        <dd>
          <span>FRONTEND CONFERENCE 2017 基調講演</span><br>
          <span class="link"><a href="https://speakerdeck.com/potato4d/arayururen-falsetamefalsehurontoendo-number-frontkansai" target="_blank" rel="noopener" >https://speakerdeck.com/potato4d/arayururen-falsetamefalsehurontoendo-number-frontkansai</a></span>
        </dd>
      </dl>
    </section>
  </div>
</template>

<script>
export default {
  transition: 'card'
}
</script>

<style scoped>
.card p,
.card dl,
.card ul{
  color: #946F6F;
}

.card ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.card ul li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  position: relative;
  margin: 5px 0;
}

.card ul li::before{
  position: absolute;
  left: 9px;
  top: 10px;
  width: 6px;
  height: 6px;
  background: #F27675;
  content: "";
  display: block;
}

.card ul li span{
  display: block;
}

.card ul li .career-name{
  width: 100px;
}

.card ul li .carrer-role{
  flex: 1;
}

.card ul li .carrer-history{
  width: 105px;
}

.card dl dt{
  font-size: 15px;
}

.card dl dd{
  font-size: 13px;
  letter-spacing: 1.2px;
  margin-top: 4px;
  margin-bottom: 10px;
}

.card ul li .carrer-history-sp{
  display: none;
}

.card .link a{
  font-size: 12px;
  color: #1D75F2;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}

@media (max-width: 460px) {
  .card ul li{
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .card ul li .career-name{
    width: 100%;
  }

  .card ul li .carrer-history{
    display: none;
  }

  .card ul li .carrer-history-sp{
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
