<template>
  <!-- <Basic />
  <Attribute />
  <Emit /> -->
  <Slot />
</template>

<script>
// import Basic from '~/Basic'
// import Attribute from '~/Attribute.vue'
// import Emit from '~/Emit.vue'
import Slot from '~/Slot.vue'

export default {
  components: {
    // Basic,
    // Attribute,
    // Emit,
    Slot
  }
}
</script>