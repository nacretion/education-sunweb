<template>
  <nav class="nav">
    <BaseButton variant="ghost" v-for="link in links" v-bind:key="link.title">
      {{ link.title }}
    </BaseButton>
  </nav>
</template>

<script>
import BaseButton from "@/components/base/Button/Button.vue";

export default {
  name: "NavMenu",
  data() {
    return {
      links: [
        { title: "Цены", href: "" },
        { title: "Галерея", href: "" },
        { title: "О компании и бетоне", href: "" },
        { title: "Контакты", href: "" },
        { title: "статьи", href: "" },
      ],
    };
  },
  components: { BaseButton },
};
</script>

<style scoped>
.nav {
  display: flex;
  padding: 15px 160px;
  align-items: center;
  justify-content: flex-end;
  gap: 42px;
  width: 100%;
  background: var(--Black);
}
</style>
