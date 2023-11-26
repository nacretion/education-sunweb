<template>
  <input :class="[baseInputClass, variantClass]" v-bind="$attrs" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    variant: {
      type: String,
    },
  },
  computed: {
    baseInputClass() {
      return "baseInput";
    },
    variantClass() {
      return this.variant;
    },
  },
};
</script>

<style src="./Input.css" scoped></style>
