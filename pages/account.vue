<template>
  <div class="card">
    <dl>
      <dt>Twitter</dt>
      <dd><a target="_blank" href="https://twitter.com/potato4d">https://twitter.com/potato4d</a></dd>

      <dt>Facebook</dt>
      <dd><a target="_blank" href="https://facebook.com/potato4d">https://facebook.com/potato4d</a></dd>

      <dt>GitHub</dt>
      <dd><a target="_blank" href="https://github.com/potato4d">https://github.com/potato4d</a></dd>

      <dt>Qiita</dt>
      <dd><a target="_blank" href="https://qiita.com/potato4d">https://qiita.com/potato4d</a></dd>

      <dt>Speaker Deck</dt>
      <dd><a target="_blank" href="https://speakerdeck.com/potato4d">https://speakerdeck.com/potato4d</a></dd>
    </dl>
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

.card dl{
  text-align: center;
}
.card dl dt{
  font-size: 18px;
}

.card dl dd{
  font-size: 16px;
  letter-spacing: 1.2px;
  margin-top: 4px;
  margin-bottom: 10px;
}
</style>
