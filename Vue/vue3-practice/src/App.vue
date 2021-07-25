<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
    <!-- @click.prevent="handler"> -->
    NAVER
  </a>
</template>

<script>
  export default {
    methods: {
      handler() {
        // html 기본 기능 동작 막기
        // event.preventDefault()
        console.log('ABC!!!')
      }
    }
  }
</script>