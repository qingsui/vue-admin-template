<template>
  <div class="container">
    <div class="attrs">
      <child v-bind="$attrs" v-on="$listeners"></child>
    </div>
  </div>
</template>
<script>
import child from "./grand-child"
export default {
  components:{child}
}
</script>
<style scoped>

</style>