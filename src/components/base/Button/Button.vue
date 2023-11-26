<template>
  <button :class="[baseButtonClass, variantClass]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
    },
  },
  computed: {
    baseButtonClass() {
      return "baseButton";
    },
    variantClass() {
      return `baseButton--${this.variant}`;
    },
  },
};
</script>

<style src="./Button.css" scoped></style>
