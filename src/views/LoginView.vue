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
    <img src="../assets/img/logo.png" />
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "LoginView",
  data() {
    return { login: "", password: "" };
  },
  methods: {
    tryLogin() {
      //Simulation retour info ok et stockage data dans singleton
      store.state.user.token = "azerf";
      store.state.user.role = "admin";
      this.$router.push("/clients");
      if (this.login == "" || this.password == "") {
        console.log("Do nothing");
      } else {
        // request vers back
        // Gestion du retour et inscription de l'objet User dans Vuex pour accès permissions
      }
      // console.log(this.login);
      // console.log(this.password);
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
