<template>
  <div>
    <h2>{{ routine.name }}</h2>
    <div class="list">
      <div
        v-for="(session, index) in routine.sessions"
        class="session"
        :key="index"
      >
        <span class="session-name">{{ session.name }}</span>
        <button @click="$emit('choose', index)">Start</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    routine: Object,
  },
};
</script>

<style scoped>
.session {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
}

.session button {
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
}
</style>
