<template>
  <button @click="add">
    ADD
  </button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter
      msg: 'Hello Computed!'
    }
  },
  // 캐싱 
  computed: {
    // 읽기 전용 Getter
    // reversedMessage() {
    //   return this.msg.split('').reverse().join('')
    // }
    // Getter, Setter
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('')
      }, 
      set(value) {
        this.msg = value    
      }
    }
  },
  methods: {
    // reverseMessage() {
    //   return this.msg.split('').reverse().join('')
    // }
    add() {
      this.reversedMessage += '!?'
    }
  }
}
</script>
