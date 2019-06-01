<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" required type="password" placeholder="Enter password"></b-form-input>
      </b-form-group>
      <b-button type="button" v-on:click="onSubmit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      show: true,
      loggedIn: false
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(process.env.VUE_APP_BASEURL + 'users', {username: this.form.username, password: this.form.password})
        .then((resp) => {
          this.loggedIn = resp.body;
          this.form = {
            username: "",
            password: ""
          };
          this.$bvToast.toast(`User logged in: ${this.loggedIn}`, {
            title: 'Status',
            autoHideDelay: 3000,
            appendToast: true
          })
        })
        .catch((err) => {
          this.$bvToast.toast(`Oops something went wrong: ${err}`, {
            title: 'Error',
            autoHideDelay: 5000,
            appendToast: true
          })
        })
    }
  }
};
</script>