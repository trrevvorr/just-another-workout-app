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
  border: none;
  border-radius: 1rem;
  background-color: #3c4d45;
}

.wrapper:hover,
.wrapper:focus {
  background-color: #879990;
}

.wrapper a {
  padding: 0.25rem 1rem;
  text-decoration: unset;
  color: inherit;
  font-size: 1.25rem;
}
</style>
