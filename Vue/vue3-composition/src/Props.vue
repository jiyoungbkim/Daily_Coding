<template>
  <MyBtn
    class="noah"
    style="color: red;"
    color="#ff0000"
    @hello="log">
    Apple
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn-props'

export default {
  components: {
    MyBtn
  },
  methods: {
    log() {
      console.log('Hello world!')
    }
  }
}
</script>