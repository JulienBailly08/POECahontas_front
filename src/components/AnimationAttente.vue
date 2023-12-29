<template>
  <div id="anim_attente">
    <trinity-rings-spinner
      :animation-duration="1500"
      :size="250"
      color="#42b983"
    />
    <p>Calcul de l'orbite optimum</p>
  </div>
</template>

<script>
import { TrinityRingsSpinner } from "epic-spinners";
export default {
  name: "AnimationAttente",
  components: { TrinityRingsSpinner },
};
</script>

<style scoped>
#anim_attente {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
