<template>
  <div class="news">
    <h1>This is an news page</h1>
    <news-table></news-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsTable from '@/components/newsTable/NewsTable.vue'; // @ is an alias to /src

@Component({
  components: {
    NewsTable,
  },
})
export default class Home extends Vue {}
</script>
