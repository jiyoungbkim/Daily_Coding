<template>
  <MyBtn>Banana</MyBtn>
  <MyBtn
    :color="color">
    <span style="color: red;">Banana</span>
  </MyBtn>
  <MyBtn
    large
    color="royalblue">
    Apple
  </MyBtn>
  <MyBtn>Cherry</MyBtn>
  <button>Banana</button>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      color: '#000'
    }
  }
}
</script>