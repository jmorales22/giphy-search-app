<template>
  <div class="container" id="app">
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search
  }
}
</script>

<style>

</style>
