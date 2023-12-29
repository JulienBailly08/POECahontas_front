<template>
  <div v-if="waitDatas">
    <trinity-rings-spinner
      :animation-duration="1500"
      :size="250"
      color="#42b983"
    />
  </div>

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
import { TrinityRingsSpinner } from "epic-spinners";
export default {
  name: "DetailClientView",
  components: { TrinityRingsSpinner },
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
