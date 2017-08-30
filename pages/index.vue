<template>
  <div class="card">
    <section>
      <h1>Biography</h1>
      <p>
        大阪生まれ現在渋谷在住のWebエンジニア。<br>
        Vue.jsやReact.jsをはじめとしたフロントエンドから、PHPによるサーバーサイド開発、デザイン業務からライター業、はたまたITイベントでのお祭り男までオールマイティーに活動している賑やかしです。
      </p>
    </section>

    <section>
      <h1>Career</h1>
      <ul>
        <li>
          <span class="career-name">Evelenback</span>
          <span class="carrer-role">代表</span>
          <span class="carrer-history">(17/07〜)</span>
        </li>
        <li>
          <span class="career-name">GNEX ltd.</span>
          <span class="carrer-role">エンジニア</span>
          <span class="carrer-history">(17/07〜)</span>
        </li>
        <li>
          <span class="career-name">Evelenback</span>
          <span class="carrer-role">エンジニア</span>
          <span class="carrer-history">(17/04〜17/07)</span>
        </li>
        <li>
          <span class="career-name">SCOUTER inc.</span>
          <span class="carrer-role">エンジニア・マネージャ</span>
          <span class="carrer-history">(17/04〜17/10)</span>
        </li>
      </ul>
    </section>
    <section>
      <h1>Latest Activities</h1>
      <dl>
        <dt>【登壇】「現代におけるプロダクト開発とPHPを選定するワケ 」</dt>
        <dd>PHPカンファレンス2017Kansai</dd>

        <dt>【登壇】「現代におけるプロダクト開発とPHPを選定するワケ 」</dt>
        <dd>PHPカンファレンス2017Kansai</dd>

        <dt>【執筆】「完全HTTPS化のメリットと極意を大規模Webサービス」</dt>
        <dd>ITmedia(@IT)</dd>

        <dt>【登壇】「Draft.jsによる 統制のとれたテキスト編集の世界」</dt>
        <dd>初夏のJavaScript祭 in mixi</dd>

        <dt>【登壇】「あらゆる人のためのフロントエンド」</dt>
        <dd>FRONTEND CONFERENCE 2017 基調講演</dd>
      </dl>
    </section>
  </div>
</template>

<script>
export default {
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
</style>
