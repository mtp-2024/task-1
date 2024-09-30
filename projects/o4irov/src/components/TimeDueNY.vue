<template>
  <div id="app">
    <p>До Нового года осталось: {{ timeLeft }}</p>
  </div>
</template>

<script>
export default {
  name: "TimeDueNY",
  props: {
    msg: String,
  },
  data() {
    return {
      timeLeft: "",
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const timeDue = this.$timeDueNewYear();

      this.timeLeft = `${timeDue["days"]}д ${timeDue["hours"]}ч ${timeDue["minutes"]}м ${timeDue["seconds"]}с`;

      console.log(`До Нового года осталось: ${this.timeLeft}`);
    },
  },
};
</script>
