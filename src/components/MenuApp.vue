<template>
  <div v-if="isLogged" v-bind:class="[role]">
    <header role="banner">
      <div id="logo-wrapper">
        <img id="logo" src="../assets/img/logo2.png">
        <h1>POECAHONTAS</h1>
      </div>
      <nav id="nav-wrapper">
        <router-link v-if="showIfRight('commercial')" :to="{ name: 'clientsList' }">
          Liste clients
        </router-link>
        <router-link v-if="showIfRight('commercial')" :to="{ name: 'planning' }">
          Visualiser planning
        </router-link>
        <router-link v-if="showIfRight('admin')" :to="{ name: 'gestion' }">
          Administration
        </router-link>
      </nav>
      <div id="logout">
        <p>Se déconnecter</p>
        <img id="logout-icon" src="../assets/icones/logout.png" @click="logOut" />
      </div>
    </header>
  </div>
</template>

<script>
import store from "@/store";
import envValues from "@/env";

export default {
  name: "MenuApp",
  data: function () {
    return {
      isLogged: false,
      role: "",
    };
  },
  computed: {
    getToken() {
      return store.state.user.token;
    },
  },
  watch: {
    getToken(newValue) {
      if (newValue != null) {
        this.isLogged = true;
        this.role = store.state.user.role;
      } else {
        this.isLogged = false;
        this.role = "";
      }
    },
  },
  methods: {
    showIfRight(value) {
      if (envValues.role[value].includes(this.role)) {
        return true;
      }
      return false;
    },
    logOut() {
      this.$router.push("/");
      store.state.user.role = null;
      store.state.user.token = null;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

body {
    margin: 0;
}

[role=banner] {
    height: 5.36vh;
    display: flex;
    padding: 0.1875rem 3.125rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    background: #F4F4F4;
}

[role=banner] h1 {

    color: #303030;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

#logo-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo, #logout-icon {
    height: 100%;
}

#logout {
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
}

#logout p {
    color: #000;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

#nav-wrapper {
  display: flex;
  padding: 0.1875rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 4.125rem;
}

#nav-wrapper > * {
  font-family: 'Exo 2', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
}

</style>
