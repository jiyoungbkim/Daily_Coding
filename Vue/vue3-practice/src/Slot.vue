<template>
  <MyBtn>
    <template #text>
      <span>Banana</span>
    </template>
    <!-- v-slot:icon -> #icon -->
    <template #icon>
      <span>(B)</span>
    </template>
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn-slot'

export default {
  components: {
    MyBtn
  },
}
</script>