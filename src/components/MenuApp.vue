<template>
  <div v-if="isLogged">
    <nav>
      <router-link to="/clients">Liste clients</router-link>
      <img src="../assets/icones/logout.png" @click="logOut" />
    </nav>
    <hr />
  </div>
</template>
<script>
import store from "@/store";

export default {
  name: "MenuApp",
  data: function () {
    return {
      isLogged: false,
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
      } else {
        this.isLogged = false;
      }
    },
  },
  methods: {
    logOut() {
      this.$router.push("/");
      store.state.user.role = null;
      store.state.user.token = null;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 35px;
  cursor: pointer;
}
</style>
