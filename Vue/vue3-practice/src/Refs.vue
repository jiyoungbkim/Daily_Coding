<template>
  <!-- <h1 ref="hello">
    Hello world!
  </h1> -->
  <Hello ref="hello" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  created() {
    console.log(this.$refs.hello)
  },
  mounted() {
    // const h1El = document.querySelector('#hello')
    // console.log(h1El.textContent)
    // this.$refs.hello
    // console.log(this.$refs.hello.$el)
    console.log(this.$refs.hello.$refs.good)
  }
}
</script>