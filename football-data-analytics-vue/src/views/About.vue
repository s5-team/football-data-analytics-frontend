<template>
  <div class="about">
    <example-button></example-button>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExampleButton from '@/components/exampleButton/ExampleButton.vue'; // @ is an alias to /src

@Component({
  components: {
    ExampleButton,
  },
})
export default class Home extends Vue {}
</script>
