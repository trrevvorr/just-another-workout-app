<template>
  <div>
    <h2>{{ session.name }}</h2>
    <div class="list">
      <div
        v-for="(exercise, index) in session.exercises"
        class="exercise"
        :key="index"
      >
        <span class="exercise-name">{{ exercise.name }}</span>
        <RouterLinkButton
          :to="{
            name: 'Exercise',
            params: { routineId, sessionId, exerciseId: index.toString() },
          }"
          >Select</RouterLinkButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import RouterLinkButton from "../components/RouterLinkButton";

export default {
  props: {
    routines: Object,
    routineId: String,
    sessionId: String,
  },
  data: function() {
    return {
      selectedExerciseIndex: 0,
    };
  },
  components: {
    RouterLinkButton,
  },
  computed: {
    session: function() {
      return this.routines[this.routineId].sessions[this.sessionId];
    },
  },
};
</script>

<style scoped>
.exercise {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
}
.exercise router-link {
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
}
</style>
