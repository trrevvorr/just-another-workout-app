<template>
  <div>
    <div class="header">
      <div>
        <h3>{{ exercise.name }}</h3>
        <div class="header-row">
          <span class="index">Set</span>
          <span class="reps">Reps</span>
          <span class="weight">Weight</span>
        </div>
      </div>
      <Timer :initialSeconds="restBeforeNextSet" :isRunning="timerRunning" />
    </div>
    <div class="list">
      <div
        v-for="(set, index) in exercise.sets"
        :class="completedSets.includes(index) ? 'complete set' : 'set'"
        :key="index"
      >
        <span class="index">{{ index + 1 }}</span>
        <span class="reps">{{ set.reps }}</span>
        <span class="weight">{{ set.weight }} lbs</span>
        <Button
          :disabled="completedSets.includes(index)"
          @click="() => completeSet(index)"
        >
          Done
        </Button>
      </div>
    </div>
    <ExerciseNavigation
      :routines="routines"
      :routineId="routineId"
      :sessionId="sessionId"
      :exerciseId="exerciseId"
    />
  </div>
</template>

<script>
import Timer from "../components/Timer.vue";
import ExerciseNavigation from "../components/ExerciseNavigator.vue";
import Button from "../components/Button.vue";

export default {
  props: {
    routines: Object,
    routineId: String,
    sessionId: String,
    exerciseId: String,
  },
  components: {
    Timer,
    ExerciseNavigation,
    Button,
  },
  data: function() {
    return {
      completedSets: [],
      timerRunning: false,
    };
  },
  watch: {
    exercise: function() {
      this.completedSets = [];
    },
  },
  computed: {
    exercise: function() {
      return this.routines[this.routineId].sessions[this.sessionId].exercises[
        this.exerciseId
      ];
    },
    lastSet: function() {
      if (this.completedSets.length) {
        return this.exercise.sets[
          this.completedSets[this.completedSets.length - 1]
        ];
      } else {
        return null;
      }
    },
    restBeforeNextSet: function() {
      if (this.lastSet) {
        return this.lastSet.rest;
      } else {
        return 0;
      }
    },
  },
  methods: {
    completeSet: function(setIndex) {
      this.completedSets.push(setIndex);
      this.startTimer();
    },
    startTimer: function() {
      this.timerRunning = false;
      setTimeout(() => (this.timerRunning = true), 1);
    },
  },
};
</script>

<style scoped>
.header {
  display: grid;
  align-items: start;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 1rem;
  margin: 1rem 0;
}

.header h3 {
  margin: 0;
  margin-bottom: 1rem;
}

.set,
.header-row {
  width: 100%;
  display: grid;
  margin-bottom: 1rem;
}

.set {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.header-row {
  grid-template-columns: 1fr 1fr 1fr;
}

.set button {
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
}

.complete .index,
.complete .reps,
.complete .weight {
  color: #e1e5e380;
  text-decoration: line-through;
}

.header-row {
  font-weight: bold;
}

.hidden-button {
  visibility: hidden;
}
</style>
