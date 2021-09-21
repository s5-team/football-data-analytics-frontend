<template>
  <div class="news">
    <h1>This is an news page</h1>
    <news-list></news-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsList from '@/components/newsList/NewsList.vue'; // @ is an alias to /src

@Component({
  components: {
    NewsList,
  },
})
export default class Home extends Vue {}
</script>
