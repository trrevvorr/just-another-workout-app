<template>
  <div>
    <h2>{{ session.name }}</h2>
    <Exercise
      v-if="session.exercises.length > 0"
      :exercise="session.exercises[selectedExerciseIndex]"
      @complete="
        selectedExerciseIndex = Math.min(
          selectedExerciseIndex + 1,
          session.exercises.length - 1
        )
      "
    />
    <div v-else>No Exercises Found</div>
  </div>
</template>

<script>
import Exercise from "./Exercise";

export default {
  components: {
    Exercise,
  },
  props: {
    session: Object,
  },
  data: function() {
    return {
      selectedExerciseIndex: 0,
    };
  },
};
</script>

<style scoped></style>
