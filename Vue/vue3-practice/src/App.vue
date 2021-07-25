<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    v-model.trim="msg" />
    <!-- v-model.lazy="msg" /> -->
    <!-- 값이 바뀌고 나서 엔터, 탭, 바깥쪽 클릭시 갱신 -->
    <!-- :value="msg" -->
    <!-- @change="msg = $event.target.value" /> -->
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello'
      }
    },
    watch: {
      msg() {
        // console.log(this.msg.trim())
      }
    }
  }
</script>