<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    v-model="msg" />
  <!-- 한글일 경우는 v-model을 쓰면 한글자 완성이 되야 적용되므로 아래와 같이 작성한다 -->
  <!-- :value="msg"  -->
  <!-- @input="msg = $event.target.value" /> -->

  <!-- @input="handler" /> -->

  <h1>{{ checked }}</h1>
  <input
    type="checkbox"
    v-model="checked" />
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello world!',
        checked: false
      }
    },
    // methods: {
    //   handler(event) {
    //     console.log(event.target.value)
    //     this.msg = event.target.value
    //   }
    // }
  }
</script>