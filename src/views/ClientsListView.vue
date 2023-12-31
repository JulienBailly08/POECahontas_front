<template>
  <div v-if="waitDatas">
    <AnimationAttente />
  </div>

  <div v-if="!waitDatas">
    <h1>Liste des clients</h1>
    <hr />
    <table>
      <caption>
        Liste de CLients
      </caption>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Entreprise</th>
          <th>Statut</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in ClientsList" v-bind:key="client.id">
          <th>{{ client.name }}</th>
          <td>{{ client.username }}</td>
          <td>{{ client.company.name }}</td>
          <td>Le statut</td>
          <td>
            <router-link :to="`/detailClient/${client.id}`"
              >Afficher détails</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AnimationAttente from "@/components/AnimationAttente.vue";
import envValues from "@/env";

export default {
  name: "ClientListView",
  components: { AnimationAttente },
  data: function () {
    return {
      waitDatas: Boolean,
      ClientsList: [],
    };
  },
  mounted() {
    this.waitDatas = true;
    fetch(`${envValues.BASE_URL_API}/users`)
      .then((res) => res.json())
      .then((data) => {
        this.waitDatas = false;
        this.ClientsList.push(...data);
      });
  },
};
</script>
