<template>
  <div id="app">
    <!-- router output -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      checked: true,
      value: true
    }
  }
}
</script>

<style lang="scss">
</style>
