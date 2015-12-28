<style>
  div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    background-color: #2c3e50;
    margin: 0;
    padding: 0;
  }
  #container {
    width: 100%;
    padding: 20px;
  }
</style>

<template>
  <div id="container">
    <calendar></calendar>
  </div>
</template>

<script>
  import Calendar from './calendar.vue'

  export default {
    components: {
      calendar: Calendar
    }
  }
</script>
