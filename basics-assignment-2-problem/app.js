const app = Vue.createApp({
  data() {
    return {
      output: '',
      secondOutput: '',
    };
  },
  methods: {
    showAlert() {
      alert('I am an alert');
    },

    updateTextOnKeyDown() {
      this.output = event.target.value;
    },

    updateTextOnEnterKey() {
      this.secondOutput = event.target.value;
    },
  },
});

app.mount('#assignment');
