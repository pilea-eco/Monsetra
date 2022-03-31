<template>
  <div class="msr-floating-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { Colours } from "../../types";

export default defineComponent({
  name: "FloatingCard",
  props: {
    hover: Boolean,
    colour: {
      type: String as PropType<Colours | string>,
      default: () => "unset",
      validator: (value: Colours | string) =>
        Object.keys(Colours).includes(value) ||
        new RegExp("^#([A-Fa-f0-9]{6})$").test(value)
    },
    paddingSize: {
      type: String as PropType<"small" | "medium" | "large">,
      default: "medium"
    }
  },
  computed: {
    _colour() {
      if (Object.keys(Colours).includes(this.colour)) {
        return `rgb(var(--${this.colour}))`;
      } else {
        return this.colour;
      }
    },
    _paddingSize() {
      const sizes = ["small", "medium", "large"];
      return `${10 + sizes.indexOf(this.paddingSize) * 10}px`
    }
  }
});
</script>

<style scoped>
.msr-floating-card {
  border-radius: 8px;
  box-shadow: 0px 5px 13px #7d7d7d36;
  background-color: v-bind(_colour);
  padding: v-bind(_paddingSize);
}
</style>