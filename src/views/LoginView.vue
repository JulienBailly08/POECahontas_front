<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Injection de données vers composant depuis le parent" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "LoginView",
  components: {
    HelloWorld,
  },
};
</script>
