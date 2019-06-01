<template>
    <b-card id="login-page" class="mt-3" header="Login">
        <LoginForm></LoginForm>
    </b-card>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
#login-page {
  margin: 20px;
}
</style>
