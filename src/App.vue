<template>
  <div id="app">
    <router-view
      :routines="routines"
      :routineId="$route.params.routineId"
      :sessionId="$route.params.sessionId"
      :exerciseId="$route.params.exerciseId"
    />
  </div>
</template>

<script>
import { getRoutines } from "./api/api.js";

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
  color: #2c3e50;
  margin: 1rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
