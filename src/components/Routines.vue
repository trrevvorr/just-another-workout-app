<template>
  <div>
    <h2>Routines</h2>
    <div class="list">
      <div
        v-for="(routine, routineId) in routines"
        class="routine"
        :key="routineId"
      >
        <span class="routine-name">{{ routine.name }}</span>
        <button @click="$emit('choose', routineId)">Select</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    routines: Object,
  },
};
</script>

<style scoped>
.routine {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
}

.routine button {
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
}
</style>
