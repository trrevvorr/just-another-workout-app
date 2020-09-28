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
.wrapper button {
  background-color: inherit;
  padding: 0.25rem 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  color: inherit;
}
.wrapper button:hover,
.wrapper button:focus {
  background-color: #9fc2e16b;
}

button:disabled {
  border: 1px solid gray;
  color: gray;
}
</style>
