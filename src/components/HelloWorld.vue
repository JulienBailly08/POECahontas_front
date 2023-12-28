<template>
  <h1>Salut !</h1>
  <p>{{ msg }}</p>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
console.log("HelloWorld");
console.log("On créera la logique d'authent ici");
</script>
