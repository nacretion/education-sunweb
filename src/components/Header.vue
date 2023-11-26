<template>
  <header class="header">
    <div class="header__content">
      <CompanyLogo />
      <div class="header__contacts">
        <BaseButton>Перезвоните мне</BaseButton>
        <PhoneNumber />
      </div>
      <BaseButton v-if="isMobile">
        <MenuIcon />
      </BaseButton>
    </div>
    <NavMenu />
  </header>
</template>

<script>
import MenuIcon from "@/assets/img/menu.svg";
import CompanyLogo from "@/components/Logo.vue";
import BaseButton from "@/components/base/Button/Button.vue";
import PhoneNumber from "@/components/PhoneNumber.vue";
import NavMenu from "@/components/base/Nav/Nav.vue";

export default {
  name: "HeaderComponent",
  components: { NavMenu, PhoneNumber, BaseButton, CompanyLogo, MenuIcon },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.header__content {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
}
.header__contacts {
  display: flex;
  gap: 16px;
}

@media (min-width: 1024px) {
  .header {
    align-items: flex-start;
    padding: 0;
  }
  .header__content {
    padding: 15px 160px;
    justify-content: space-between;
    gap: 16px;
  }
  .header__contacts {
    gap: 32px;
  }
}
</style>
