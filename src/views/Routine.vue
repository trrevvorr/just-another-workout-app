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
        <RouterLinkButton
          :to="{
            name: 'Session',
            params: { routineId, sessionId: index.toString() },
          }"
        >
          Select
        </RouterLinkButton>
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
  },
  components: {
    RouterLinkButton,
  },
  computed: {
    routine: function() {
      return this.routines[this.routineId];
    },
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

.session router-link {
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.25rem 1rem;
}
</style>
