<template>
  <div id="app">
    <Routines
      v-if="selectedRoutineId === null"
      :routines="routines"
      @choose="(id) => (selectedRoutineId = id)"
    />
    <Routine
      v-else-if="selectedSessionindex === null"
      :routine="routines[selectedRoutineId]"
      @choose="(i) => (selectedSessionindex = i)"
    />
    <Session
      v-else
      :session="routines[selectedRoutineId].sessions[selectedSessionindex]"
    />
  </div>
</template>

<script>
import Routines from "./components/Routines.vue";
import Routine from "./components/Routine.vue";
import Session from "./components/Session.vue";
import { getRoutines } from "./api/api.js";

export default {
  name: "App",
  components: {
    Routines,
    Routine,
    Session,
  },
  data: function() {
    return {
      routines: [],
      selectedRoutineId: null,
      selectedSessionindex: null,
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
  /* text-align: center; */
  color: #2c3e50;
  margin: 1rem;
  /* margin-top: 60px; */
}
</style>
