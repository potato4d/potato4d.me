<template>
  <div class="card">
    <div :class="{toast: true, active: isComplete}">
      <span class="success" v-if="isSuccess">
        送信が完了しました。
      </span>
      <span class="error" v-else>
        送信に失敗しました。
      </span>
    </div>

    <section style='text-align: center'>
      mail@potato4d.me までご連絡ください。
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

if (process.browser) {
  const Toast = require('vue-easy-toast')
  Vue.use(Toast)
}

export default {
  transition: 'card',
  data () {
    return {
      isSend: false,
      isComplete: false,
      isSuccess: true,
      name: '',
      email: '',
      body: ''
    }
  },
  methods: {
    doSend () {
      this.isSend = true
      const { name, email, body } = this
      axios.post(
        'https://8tqcgu7tvb.execute-api.ap-northeast-1.amazonaws.com/prod/contact',
        {
          name,
          email,
          body
        }
      )
        .then((res) => {
          this.isSend = false
          this.isComplete = true
          this.isSuccess = true
        })
        .catch(() => {
          this.isSend = false
          this.isComplete = true
          this.isSuccess = false
        })
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  left: calc(50vw - 150px);
  top: 0;
  width: 300px;
  height: 50px;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0,0,0,0.16);
  display: none;

  color: #333;
  font-size: 16px;
  font-weight: bold;
  font-family: Hiragino Sans, Meiryo, Noto Sans CJK JK;
}

.toast.active{
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 5.0s forwards;
}

.toast .success{
  color: #409A73;
}

.toast .error{
  color: #DD0300;
}

@keyframes slideIn {
  0%{ top: -50px }
  10%{ top: 0px }
  90%{ top: 0px }
  100%{ top: -60px }
}

.card p.caution{
  font-size: 14px;
}

.card p{
  margin-bottom: 20px;
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
  padding: 5px;
  font-size: 14px;
  border: solid 1px #e5e5e5;
}

.card input[disabled],
.card textarea[disabled]{
  background: #e0e0e0 !important;
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
