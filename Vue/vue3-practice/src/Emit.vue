<template>
  <!-- 연결하는 이벤트의 이름은 꼭 click이 아니어도 된다 -->
  <MyBtn
    @click="log"
    @change-msg="logMsg">
    Banana
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn-emit'

export default {
  components: {
    MyBtn
  },
  methods: {
    log(event) {
      console.log('Click!')
      console.log(event)
    },
    logMsg(msg) {
      console.log(msg)
    }
  }
}
</script>