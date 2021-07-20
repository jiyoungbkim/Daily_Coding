<template>
  <div>
    <!-- <button @click="add">
      ADD
    </button> -->
    <h1 @click="changeMessage">
      {{ msg }}
    </h1>
    <h1>
      {{ reversedMessage }}
    </h1>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter
      msg: 'Hello?',
      isActive: false
    }
  },
  // 캐싱 
  computed: {
    // 읽기 전용 Getter
    reversedMessage() {
      return this.msg.split('').reverse().join('')
    }
    // Getter, Setter
    // reversedMessage: {
    //   get() {
    //     return this.msg.split('').reverse().join('')
    //   }, 
    //   set(value) {
    //     this.msg = value    
    //   }
    // }
  },
  // 데이터 변경 확인
  watch: {
    msg() {
      console.log('msg:', this.msg)
    },
    reversedMessage() {
      console.log('reversedMessage', this.reversedMessage)
    }
  },
  methods: {
    // reverseMessage() {
    //   return this.msg.split('').reverse().join('')
    // }
    // add() {
    //   this.reversedMessage += '!?'
    // },
    changeMessage() {
      this.msg = "Good!"
    },
    
  }
}
</script>