<template>
  <div id="app">
    <NavBar />
    <router-view
      class="body"
      :routines="routines"
      :routineId="$route.params.routineId"
      :sessionId="$route.params.sessionId"
      :exerciseId="$route.params.exerciseId"
    />
  </div>
</template>

<script>
import { getRoutines } from "./api/api.js";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  props: {
    routineId: String,
    sessionId: String,
    exerciseId: String,
  },
  data: function() {
    return {
      routines: [],
    };
  },
  components: {
    NavBar,
  },
  created: function() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      this.routines = getRoutines();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1c201e;
  color: #e1e5e3;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

body {
  margin: 0;
  padding: 0;
}

.body {
  margin: 0 1rem;
  overflow-y: auto;
  font-size: 1.5rem;
}
</style>
