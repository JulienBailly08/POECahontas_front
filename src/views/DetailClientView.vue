<template>
  <div v-if="waitDatas">
    <AnimationAttente />
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
import AnimationAttente from "@/components/AnimationAttente.vue";
import envValues from "@/env";

export default {
  name: "DetailClientView",
  components: { AnimationAttente },
  data: function () {
    return {
      waitDatas: Boolean,
      client: {},
    };
  },
  mounted() {
    this.waitDatas = true;
    fetch(`${envValues.BASE_URL_API}/users/` + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.waitDatas = false;
        this.client = data;
      });
  },
};
</script>
