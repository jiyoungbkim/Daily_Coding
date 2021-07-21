<template>
  <div>
    <button @click="handler">
      click me!
    </button>
    <!-- <h1 v-if="isShow">
      Hello?
    </h1>
    <h1 v-else-if="count > 3">
      Count > 3
    </h1>
    <h1 v-else>
      Good~
    </h1> -->
    <!-- 최상위 템플릿에서는 v-if를 사용할 수 없지만 하위 템플릿에는 사용가능. 의미없는 div 대신 사용 -->
    <template v-if="isShow"> 
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <!-- v-if가 false일 경우 요소 자체도 렌더링하지 않는다 v-show일 때는 display: none으로 렌더링-->
    <h1 v-show="isShow">
      Hello?!
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>
