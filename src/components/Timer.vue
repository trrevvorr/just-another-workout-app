<template>
  <div class="timer">
    <span class="label">Next Set</span>
    <span :class="seconds <= 5 ? 'time-remaining warning' : 'time-remaining'"
      >{{ seconds }}s</span
    >
  </div>
</template>

<script>
export default {
  props: {
    initialSeconds: Number,
    isRunning: Boolean,
  },
  data: function() {
    return {
      seconds: this.initialSeconds,
      interval: null,
    };
  },
  watch: {
    isRunning: function(newIsRunning) {
      if (newIsRunning) {
        this.startTimer();
      } else {
        this.resetTimer();
      }
    },
    seconds: function(newSeconds) {
      if (newSeconds <= 0) {
        this.stopTimer();
      }
    },
    initialSeconds: function() {
      this.resetTimer();
      if (this.isRunning) {
        this.startTimer();
      }
    },
  },
  methods: {
    startTimer: function() {
      if (this.seconds > 0) {
        this.interval = setInterval(() => this.seconds--, 1000);
      }
    },
    resetTimer: function() {
      this.stopTimer();
      this.seconds = this.initialSeconds;
    },
    stopTimer: function() {
      clearInterval(this.interval);
    },
  },
};
</script>

<style scoped>
.timer {
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #3c4d45;
  border-radius: 10px;
  padding: 0.25rem;
  text-align: center;
}

.label {
  font-size: 1rem;
}

.time-remaining {
  font-size: 1.5rem;
  font-weight: bold;
  font-size: 2rem;
}
</style>
