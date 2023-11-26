<template>
  <div class="logo">
    <LogoIcon class="logoIcon" />
    <h1 class="logoTitle" v-if="!isMobile">Евробетон</h1>
  </div>
</template>

<script>
import LogoIcon from "@/assets/img/logo.svg";
export default {
  name: "CompanyLogo",
  components: {
    LogoIcon,
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.logoIcon {
  width: 50px;
  height: 50px;
}
.logoTitle {
  color: #2c2b2e;
  font-family: "RF Dewi Expanded", sans-serif;
  font-weight: 900;
  line-height: 120%;
  text-transform: uppercase;
}
</style>
