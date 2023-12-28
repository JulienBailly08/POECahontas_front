<template>
  <p>{{ client }}</p>
  <hr />
  <p>Adresse</p>
  <p>{{ client.address }}</p>
  <hr />
  <p>Entreprise</p>
  <p>{{ client.company }}</p>
</template>
<script>
export default {
  name: "DetailClientView",
  data: function () {
    return {
      client: {},
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.client = data;
      });
  },
};
</script>
