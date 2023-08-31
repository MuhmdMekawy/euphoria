<script>
export default {
  name: 'Product',
  data() {
    return {}
  },
  computed: {
    userId() {
      return this.$route.params.id;
    }
  }
}
</script>

<template>
  <div>
    {{ console.log(userId) }}
    <h1>Hello Customer</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>