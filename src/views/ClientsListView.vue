<template>
  <div v-if="waitDatas">
    <trinity-rings-spinner
      :animation-duration="1500"
      :size="200"
      color="#42b983"
    />
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
import { TrinityRingsSpinner } from "epic-spinners";
export default {
  name: "ClientListView",
  components: { TrinityRingsSpinner },
  data: function () {
    return {
      waitDatas: Boolean,
      ClientsList: [],
    };
  },
  mounted() {
    this.waitDatas = true;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.waitDatas = false;
        this.ClientsList.push(...data);
      });
  },
};
</script>

<style></style>
