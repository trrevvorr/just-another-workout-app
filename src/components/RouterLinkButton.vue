<template>
  <div class="wrapper">
    <router-link :to="to"><slot /></router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: Object,
    label: String,
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid #dfe9e4;
  border-radius: 1rem;
}

.wrapper:hover,
.wrapper:focus {
  background-color: #879990b3;
}

.wrapper a {
  padding: 0.25rem 1rem;
  text-decoration: unset;
  color: inherit;
}
</style>
