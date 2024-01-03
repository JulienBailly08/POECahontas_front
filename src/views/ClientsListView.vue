<template>
    <div v-if="waitDatas">
        <AnimationAttente />
    </div>
    <main role="main" v-if="!waitDatas">
        <div class="wrapper">
            <h2>Liste des clients</h2>
            <div id="search">
                <div id="search-bars">
                    <div class="search-bar">
                        <h3>Nom</h3>
                        <input id="input-name" type="search">
                    </div>
                    <div class="search-bar">
                        <h3>Entreprise</h3>
                        <input id="input-company" type="search">
                    </div>
                    <img src="../assets/icones/search.png">
                </div>
                <button id="add-client">Ajouter Client</button>
            </div>
            <div id="table">
                <div id="table-header">
                    <div class="data-name"><h3>Nom</h3></div>
                    <div class="data-name"><h3>Prénom</h3></div>
                    <div class="data-company"><h3>Entreprise</h3></div>
                    <div class="data-status"><h3>Statut</h3></div>
                </div>
                <div id="table-data">
                    <div class="client" v-for="client in ClientsList" v-bind:key="client.id">
                        <router-link :to="`/detailClient/${client.id}`">
                            <img src="../assets/icones/eye.png">
                        </router-link>
                        <div class="client-data">
                            <div class="data-name"><h3>{{ client.name }}</h3></div>
                            <div class="data-name"><h3>{{ client.username }}</h3></div>
                            <div class="data-company"><h3>{{ client.company.name }}</h3></div>
                            <div class="data-status"><h3>Statut non défini</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
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


<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

html {
    font-size: 1.5vh;
}

.wrapper {
    display: flex;
    padding: 0rem 4.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    flex: 1 0 0;
    align-self: stretch;

    color:white;
    height: 94.1vh;
    background-color: #4C599D;
    background-image: url("../assets/img/pattern.png");
    background-blend-mode: luminosity;
    background-position: -2rem -2rem;
    filter: alpha(opacity=10);
}

.wrapper h2 {
    margin: 0;

    color: #FFF;
    font-family: 'Exo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

#search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

#search-bars {
    display: flex;
    align-items: flex-end;
    gap: 3.75rem;
    align-self: stretch;
}

.search-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.search-bar input {

    border-radius: 2.4375rem;
    background: #F4F4F4;

    padding: 1rem;
    
    color: #0f0f0f;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border: none;
}

#input-name {
    width: 40vw;
    height: 5vh;
}

#input-company {
    width: 20vw;
    height: 5vh;
}

.search-bar h3 {
    color: #F4F4F4;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-block: 0;
}

#search-bars img {
    width: 3.5625rem;
    height: 3.5625rem;
    flex-shrink: 0;
}

#add-client {
    width: 20rem;
    padding: 0.75rem 4.125rem;
    border-radius: 1.25rem;
    background: #D4D5FC;

    color: #313B72;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    border:none
}

#table {
    min-width: 52rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;

    border-radius: 0.875rem;
}

#table-header {
    display: flex;
    padding: 0rem 4rem 3rem ;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    margin-bottom: -4rem;
    padding-left: 6rem;

    border-radius: 0.875rem;
    border: 6px solid #313B72;
    background: #F4F4F4;
}

#table-header h3 {
    color: #313B72;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

#table-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;

    border-radius: 1.4375rem;
    border: 6px solid #313B72;
    background: #F4F4F4;
}

.client {
    display: flex;
    padding: 0rem 4rem 0rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    align-self: stretch;
}

.client img {
    width: 2.375rem;
    height: 1.5625rem;
}

.client-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
}

.client h3 {
    color: #313B72;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.data-name {
    display: flex;
    align-items: center;
    flex: 1 0 0;
}
.data-company {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
}
.data-status {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1 0 0;
}
</style>