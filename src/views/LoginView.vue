<template>
  <div class="login">
    <form v-on:submit.prevent="(e) => tryLogin(e)">
      <p>Enregistrer vous</p>
      <label for="login">Nom d'utilisateur</label>
      <input type="text" id="login" autocomplete />
      <label for="password">Nom d'utilisateur</label>
      <input type="password" id="password" autocomplete />
      <button type="submit">Se connecter</button>
    </form>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "LoginView",
  methods: {
    tryLogin(event) {
      const username = event.target.login.value;
      const password = event.target.password.value;
      if (username == "" || password == "") {
        console.log("Do nothing");
      } else {
        // request vers back
        // Gestion du retour et inscription de l'objet User dans Vuex pour accès permissions
      }
      console.log(username);
      console.log(password);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

form input {
  margin-bottom: 1rem;
}
</style>
