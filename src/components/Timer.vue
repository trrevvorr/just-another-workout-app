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
      audioContext: new (window.AudioContext ||
        window.webkitAudioContext ||
        window.audioContext)(),
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
    seconds: function(newSeconds, oldSeconds) {
      if (newSeconds <= 0) {
        this.stopTimer();
      }

      if (oldSeconds === 1 && newSeconds === 0) {
        this.beep(500, 1500);
      } else if (newSeconds === 1) {
        this.beep(250, 1000);
      } else if (newSeconds === 2) {
        this.beep(250, 1000);
      } else if (newSeconds === 3) {
        this.beep(250, 1000);
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
    beep: function(duration, frequency) {
      var oscillator = this.audioContext.createOscillator();
      var gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      if (frequency) {
        oscillator.frequency.value = frequency;
      }

      gainNode.gain.value = 1;
      oscillator.type = "sine";
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + (duration || 500) / 1000);
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
