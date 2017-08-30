<template>
  <div class="card">
    <section>
      <form class="" action="index.html" method="post">
        <h1>Contact</h1>

        <p>
          <label>お名前</label>
          <input type="text" name="name">
        </p>

        <p>
          <label>メールアドレス</label>
          <input type="email" name="email">
        </p>

        <p>
          <label>本文</label>
          <textarea name="body" rows="8" cols="80"></textarea>
        </p>

        <div class="submit-area">
          <button type="submit" name="button">
            <span>
              送信
            </span>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.card p.caution{
  font-size: 14px;
}

.card p{
  margin-bottom: 20px;
}

.card input{
  padding: 5px 0;
}

.card p,
.card dl,
.card ul{
  color: #946F6F;
}

.card label{
  display: block;
}

.card input,
.card textarea{
  width: 100%;
  border: solid 1px #e5e5e5;
}

.card .submit-area{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card button{
  width: 120px;
  height: 40px;
  color: #fff;
  background: #F27675;
  border: 0;
  border-bottom: solid 4px #E6504F;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.card button:hover{
  background: #E6504F;
}

.card button span{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
}
</style>
