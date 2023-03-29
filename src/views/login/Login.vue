<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.stop.prevent="submit">
      <img
        class="mb-4"
        src="../../assets/logo.png"
        alt="Logo"
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Seja Bem-Vindo</h1>

      <div class="form-floating">
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Senha</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </main>
</template>

<script>
import Cookie from 'js-cookie';

export default {
  name: "LoginScreen",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      fetch(process.env.VUE_APP_API_BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          Cookie.set('_app_token', res.access_token);
        });
    },
  },
};
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>