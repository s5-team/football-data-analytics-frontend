<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="n in news" v-bind:key="n.title" v-bind:href="n.url">{{ n.title }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts" src="./NewsTable.ts"></script>
<style scoped src="./NewsTable.css"></style>
