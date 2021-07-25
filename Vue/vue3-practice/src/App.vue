<template>
  <input
    type="text"
    @keydown.ctrl.a="handler" />
    <!-- 키의 조합을 체이닝으로 ctrl + a를 눌렀을 때 출력 -->
    <!-- @keydown.enter="handler" /> -->
</template>

<script>
  export default {
    methods: {
      handler() {
        // if(event.key === 'Enter'){
          console.log('Enter!!')
        // }
      }
    }
  }
</script>