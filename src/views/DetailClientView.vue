<template>
  <div v-if="waitDatas">TEST</div>

  <div v-if="!waitDatas">
    <p>{{ client }}</p>
    <hr />
    <p>Adresse</p>
    <p>{{ client.address }}</p>
    <hr />
    <p>Entreprise</p>
    <p>{{ client.company }}</p>
  </div>
</template>
<script>
export default {
  name: "DetailClientView",
  data: function () {
    return {
      waitDatas: Boolean,
      client: {},
    };
  },
  mounted() {
    this.waitDatas = true;
    fetch("https://jsonplaceholder.typicode.com/users/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.waitDatas = false;
        this.client = data;
      });
  },
};
</script>
