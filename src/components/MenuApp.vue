<template>
  <div v-if="isLogged" v-bind:class="[role]">
    <nav>
      <router-link
        v-if="showIfRight('commercial')"
        :to="{ name: 'clientsList' }"
        >Liste clients</router-link
      >
      <router-link v-if="showIfRight('lanceur')" :to="{ name: 'planning' }"
        >Visualiser planning</router-link
      >
      <router-link v-if="showIfRight('admin')" :to="{ name: 'gestion' }"
        >Administration</router-link
      >
      <img src="../assets/icones/logout.png" @click="logOut" />
    </nav>
    <hr />
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
img {
  max-width: 35px;
  cursor: pointer;
}
.admin {
  background-color: rgb(170, 95, 9);
}
.commercial {
  background-color: rgb(245, 245, 8);
}
.lanceur {
  background-color: rgb(212, 62, 62);
}
</style>
