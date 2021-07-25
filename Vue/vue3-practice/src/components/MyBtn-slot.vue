<template>
  <div class="btn">
    <!-- fallback contents 대체 내용-->
    <!-- <slot>Apple</slot> -->
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .btn {
    display: inline-block;
    margin: 4px;
    padding: 6px 12px;
    border-radius: 4px;
    background-color: gray;
    color: white;
    cursor: pointer;
  }
</style>