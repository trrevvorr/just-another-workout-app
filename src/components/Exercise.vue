<template>
  <div>
    <div class="header">
      <h3>{{ exercise.name }}</h3>
      <Timer :initialSeconds="restBeforeNextSet" :isRunning="timerRunning" />
    </div>
    <div class="list">
      <div class="header-row">
        <span class="index">Set</span>
        <span class="reps">Reps</span>
        <span class="weight">Weight</span>
        <button disabled="true" class="hidden-button">Done</button>
      </div>
      <div
        v-for="(set, index) in exercise.sets"
        :class="completedSets.includes(index) ? 'complete set' : 'set'"
        :key="index"
      >
        <span class="index">{{ index + 1 }}</span>
        <span class="reps">{{ set.reps }}</span>
        <span class="weight">{{ set.weight }} lbs</span>
        <button
          :disabled="completedSets.includes(index)"
          @click="() => completeSet(index)"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from "./Timer.vue";

export default {
  props: {
    exercise: Object,
  },
  components: {
    Timer,
  },
  data: function() {
    return {
      completedSets: [],
      timerRunning: false,
    };
  },
  watch: {
    completedSets: function(newCompletedSets) {
      if (newCompletedSets.length === this.exercise.sets.length) {
        this.$emit("complete");
      }
    },
    exercise: function() {
      this.completedSets = [];
    },
  },
  computed: {
    nextSet: function() {
      const incompleteSets = this.exercise.sets.filter(
        (set, index) => !this.completedSets.includes(index)
      );

      if (incompleteSets.length) {
        return incompleteSets[0];
      } else {
        return null;
      }
    },
    restBeforeNextSet: function() {
      if (this.nextSet && this.nextSet.rest && this.completedSets.length > 0) {
        return this.nextSet.rest;
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
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
  margin: 1rem 0;
}

.header h3 {
  margin: 0;
}

.set,
.header-row {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  margin-bottom: 1rem;
}

.set button,
.hidden-button {
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
}

.complete .index,
.complete .reps,
.complete .weight {
  color: gray;
}

.header-row {
  font-weight: bold;
}

.hidden-button {
  visibility: hidden;
}
</style>
