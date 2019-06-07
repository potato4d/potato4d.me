<template>
  <div class="card">
    <section style="text-align: center">
      mail@potato4d.me までご連絡ください。
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  transition: 'card'
})
</script>

<style scoped>
.toast {
  position: fixed;
  left: calc(50vw - 150px);
  top: 0;
  width: 300px;
  height: 50px;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.16);
  display: none;

  color: #333;
  font-size: 16px;
  font-weight: bold;
  font-family: Hiragino Sans, Meiryo, Noto Sans CJK JK;
}

.toast.active {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 5s forwards;
}

.toast .success {
  color: #409a73;
}

.toast .error {
  color: #dd0300;
}

@keyframes slideIn {
  0% {
    top: -50px;
  }
  10% {
    top: 0px;
  }
  90% {
    top: 0px;
  }
  100% {
    top: -60px;
  }
}

.card p.caution {
  font-size: 14px;
}

.card p {
  margin-bottom: 20px;
}

.card p,
.card dl,
.card ul {
  color: #946f6f;
}

.card label {
  display: block;
}

.card input,
.card textarea {
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border: solid 1px #e5e5e5;
}

.card input[disabled],
.card textarea[disabled] {
  background: #e0e0e0 !important;
}

.card .submit-area {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card button {
  width: 120px;
  height: 40px;
  color: #fff;
  background: #f27675;
  border: 0;
  border-bottom: solid 4px #e6504f;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.card button:hover {
  background: #e6504f;
}

.card button span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
}
</style>
