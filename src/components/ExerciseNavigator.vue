<template>
  <div class="nav">
    <span>
      <RouterLinkButton
        v-if="prevExercise"
        :to="{
          name: 'Exercise',
          params: { routineId, sessionId, exerciseId: prevExerciseId },
        }"
      >
        <font-awesome-icon icon="angle-left" />
        {{ prevExercise.name }}
      </RouterLinkButton>
      <RouterLinkButton
        v-else
        :to="{
          name: 'Session',
          params: { routineId, sessionId },
        }"
      >
        <font-awesome-icon icon="angle-left" />
        Back
      </RouterLinkButton>
    </span>
    <span></span>
    <span>
      <RouterLinkButton
        v-if="nextExercise"
        :to="{
          name: 'Exercise',
          params: { routineId, sessionId, exerciseId: nextExerciseId },
        }"
      >
        {{ nextExercise.name }}
        <font-awesome-icon icon="angle-right" />
      </RouterLinkButton>
      <RouterLinkButton
        v-else
        :to="{
          name: 'Session',
          params: { routineId, sessionId },
        }"
        >End</RouterLinkButton
      >
    </span>
  </div>
</template>

<script>
import RouterLinkButton from "../components/RouterLinkButton";

export default {
  props: {
    routines: Object,
    routineId: String,
    sessionId: String,
    exerciseId: String,
  },
  components: {
    RouterLinkButton,
  },
  computed: {
    prevExerciseId: function() {
      const exerciseIndex = Number.parseInt(this.exerciseId);
      return exerciseIndex > 0 ? (exerciseIndex - 1).toString() : null;
    },
    prevExercise: function() {
      if (this.prevExerciseId) {
        return this.routines[this.routineId].sessions[this.sessionId].exercises[
          Number.parseInt(this.prevExerciseId)
        ];
      } else {
        return null;
      }
    },
    nextExerciseId: function() {
      const exerciseIndex = Number.parseInt(this.exerciseId);
      return exerciseIndex + 1 <
        this.routines[this.routineId].sessions[this.sessionId].exercises.length
        ? (exerciseIndex + 1).toString()
        : null;
    },
    nextExercise: function() {
      if (this.nextExerciseId) {
        return this.routines[this.routineId].sessions[this.sessionId].exercises[
          Number.parseInt(this.nextExerciseId)
        ];
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
