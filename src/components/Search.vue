<template>
  <div class="section">
    <form v-on:submit.prevent="executeSearchGiphy" class="field is-grouped">
      <div class="control is-expanded">
        <input v-model="inputText" class="input" type="text" placeholder="Find a repository" />
      </div>
      <div class="control">
        <input type="submit" class="button is-primary" value="Search" />
      </div>
    </form>
  </div>
</template>

<script>
import searchGiphy from '../api/search-giphy';

export default {
  name: 'Search',
  data: function () {
    return {
      inputText: ''
    }
  },
  methods:{
      async executeSearchGiphy(){
          let giphyData = await searchGiphy(this.inputText);
          console.log(giphyData);
      }
  },
};
</script>

<style></style>
