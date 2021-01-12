const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn vue',
      courseGoalB: 'Master vue and build amerzing apps',
      vueLink: 'http://vuejs.org',
    };
  },
  methods: {
    outPutGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
