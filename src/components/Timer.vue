<template>
  <div class="timer">
    <span>Next Set:</span>
    <span :class="seconds <= 5 ? 'time-remaining warning' : 'time-remaining'"
      >{{ seconds }} s</span
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
  grid-template-columns: auto 1fr;
}

.time-remaining {
  margin-left: 5px;
  font-weight: bold;
}

.time-remaining.warning {
  color: red;
}
</style>
