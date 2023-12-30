<template>
  <div class="login">
    <form v-on:submit.prevent="tryLogin">
      <p>Enregistrer vous</p>
      <label for="login">Nom d'utilisateur</label>
      <input type="text" id="login" name="login" v-model="login" autocomplete />
      <label for="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        autocomplete
      />
      <button type="submit">Se connecter</button>
    </form>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return { login: "", password: "" };
  },
  methods: {
    tryLogin() {
      if (this.login == "" || this.password == "") {
        console.log("Do nothing");
      } else {
        // request vers back
        // Gestion du retour et inscription de l'objet User dans Vuex pour accès permissions
      }
      console.log(this.login);
      console.log(this.password);
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
