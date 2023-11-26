<template>
  <BaseButton v-if="isMobile" variant="round">
    <PhoneIcon />
  </BaseButton>
  <div v-else class="mobilePhone">
    <a href="tel:+7(3452)500-301">+7 (3452) 500-301</a>
    <p>многоканальный номер в Тюмени</p>
  </div>
</template>

<script>
import PhoneIcon from "@/assets/img/phone.svg";
import BaseButton from "@/components/base/Button/Button.vue";

export default {
  name: "PhoneNumber",
  components: { BaseButton, PhoneIcon },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style scoped>
.mobilePhone {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

a {
  color: var(--Red);
  text-align: right;
  font-family: "RF Dewi Expanded", sans-serif;
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
}

p {
  color: var(--Black);
  text-align: right;
  font-family: "RF Dewi", sans-serif;
  font-size: 13px;
}
</style>
