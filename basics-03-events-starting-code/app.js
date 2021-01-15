const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    submitForm() {
      alert('lol submitted');
    },
    reduce(num) {
      this.counter = this.counter - num;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    setName(event, secondName) {
      this.name = event.target.value + ' ' + secondName;
    },
  },
});

app.mount('#events');
