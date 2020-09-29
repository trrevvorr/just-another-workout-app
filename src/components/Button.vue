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
}
.wrapper button:hover:not([disabled]),
.wrapper button:focus:not([disabled]) {
  background-color: #879990;
}

.wrapper button:disabled {
  opacity: 50%;
  cursor: not-allowed;
}
</style>
