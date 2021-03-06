<template>
  <div class="msr-alert-dialog__wrapper" :show="_isShown" @click="e => $_checkHide(e)">
    <div class="msr-alert-dialog" ref="dialog">
      <div class="msr-alert-dialog__title">
        <h4>{{ title }}</h4>
      </div>

      <div class="msr-alert-dialog__content">
        <slot name="content">
          <p>{{ content }}</p>
        </slot>
      </div>

      <div class="msr-alert-dialog__actions">
        <slot name="actions">
          <text-button @click="hide" label="Ok"></text-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TextButton from "../button/TextButton.vue";
import { type InformativeContext, Theme } from "../../types";

export default defineComponent({
  name: "AlertDialog",
  inject: ["theme"],
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    dismissible: {
      type: Boolean
    }
  },
  emits: {
    context(ctx: InformativeContext) {
      return ctx;
    }
  },
  components: {
    TextButton
  },
  data() {
    return {
      _isShown: false,
    }
  },
  computed: {
    _backgroundColour() {
      return (this as any)['theme'] == Theme.dark ? "var(--dark-background)" : "var(--light-background)";
    }
  },
  methods: {
    show() {
      this._isShown = true;
    },
    hide() {
      this._isShown = false;
    },
    $_checkHide(e: MouseEvent) {
      if (this.dismissible) {
        let dialog = this.$refs.dialog as HTMLElement;

        if (e.target == dialog || e.composedPath().includes(dialog)) {
          return;
        }

        this._isShown = false;
      }
    }
  },
  mounted() {
    let ctx: InformativeContext = {
      show: this.show,
      hide: this.hide,
    }

    this.$emit("context", ctx);
  }
});
</script>

<style scoped>
.msr-alert-dialog__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
}

.msr-alert-dialog__wrapper[show="false"] {
  visibility: hidden;
  backdrop-filter: blur(0px) brightness(1);
  transition: all ease-out 100ms;
}

.msr-alert-dialog__wrapper[show="false"] .msr-alert-dialog {
  visibility: hidden;
  opacity: 0;
  transform: scale(0.55, 0.55);
  transition: all linear 100ms;
}

.msr-alert-dialog__wrapper[show="true"] {
  visibility: visible;
  backdrop-filter: blur(13px) brightness(0.5);
  transition: all ease-out 300ms;
}

.msr-alert-dialog__wrapper[show="true"] .msr-alert-dialog {
  visibility: visible;
  opacity: 1;
  transform: scale(1, 1);
  transition: all ease-out 100ms;
}

.msr-alert-dialog {
  display: flex;
  flex-direction: column;

  border-radius: 13px;
  background-color: v-bind(_backgroundColour);

  min-width: 377px;
  min-height: 210px;
}

.msr-alert-dialog .msr-alert-dialog__title {
  font-weight: bold;
  font-size: 1.313rem;
  line-height: 1.75rem;

  padding: 13px 21px;
}

.msr-alert-dialog .msr-alert-dialog__content {
  flex-grow: 1;
  padding: 0px 21px 13px 21px;
}

.msr-alert-dialog .msr-alert-dialog__actions {
  display: flex;
  justify-content: flex-end;

  padding: 0px 5px 5px 5px;
}
</style>