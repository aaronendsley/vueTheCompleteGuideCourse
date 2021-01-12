const app = Vue.createApp({
  data() {
    return {
      name: 'bob',
      age: 2000,
      image: 'https://miro.medium.com/max/700/1*Kd7mrwqmrzyAudv8tS-OdQ.png',
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },

    ageInFiveYears() {
      return this.age + 5;
    },
  },
});

app.mount('#assignment');
