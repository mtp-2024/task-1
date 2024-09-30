<template>
  <TimeDueNY />
</template>

<script>
import TimeDueNY from "./components/TimeDueNY.vue";

export default {
  name: "App",
  components: {
    TimeDueNY,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
