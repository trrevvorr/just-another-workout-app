<template>
  <div class="nav">
    <div class="bar">
      <button @click="() => (expanded = !expanded)">
        <font-awesome-icon icon="bars" />
      </button>
    </div>
    <div v-if="expanded" class="menu">
      <router-link
        :to="{
          name: 'Routines',
        }"
        >Routines</router-link
      >
      <router-link
        v-if="
          latestIdSet &&
            latestIdSet.routineId &&
            latestIdSet.sessionId &&
            latestIdSet.exerciseId
        "
        :to="{
          name: 'Exercise',
          params: {
            routineId: latestIdSet.routineId,
            sessionId: latestIdSet.sessionId,
            exerciseId: latestIdSet.exerciseId,
          },
        }"
        >Resume Session</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    latestIdSet: Object,
  },
  data: function() {
    return {
      expanded: false,
    };
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
}

.bar {
  background-color: #879990;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

.bar button {
  font-size: 1.5rem;
  background-color: inherit;
  border: none;
}

.menu {
  padding: 1rem;
  background-color: #3c4d45;
}

.menu a {
  color: #e1e5e3;
  display: inline-block;
  padding: 0.25rem 0;
  width: 100%;
  text-decoration: none;
  font-size: 1.25rem;
}
</style>
