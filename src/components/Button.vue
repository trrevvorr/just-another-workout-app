<template>
  <div class="wrapper">
    <button :disabled="disabled" @click="$emit('click')">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    label: String,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.wrapper button {
  margin: auto;
  background-color: #3c4d45;
  padding: 0.25rem 1rem;
  border: none;
  border-radius: 1rem;
  color: inherit;
  cursor: pointer;
  font-size: 1.25rem;
}
.wrapper button:hover:not([disabled]),
.wrapper button:focus:not([disabled]) {
  background-color: #879990;
}

.wrapper button:disabled {
  background-color: #3c4d4580;
  color: #e1e5e380;
  cursor: not-allowed;
  text-decoration: line-through;
}
</style>
