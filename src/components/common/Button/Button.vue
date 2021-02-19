<template>
  <v-btn
    :class="styles"
    :x-large="xlarge"
    :dark="dark"
    @click="handleClick"
    :to="to"
    :disabled="disabled"
  >
    <span class="btn-text">
      {{ text }}
    </span>
  </v-btn>
</template>

<script>
export default {
  props: {
    styles: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'null'
    },
    xlarge: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style>
.v-btn {
  text-transform: none;
}

.v-btn.v-size--x-large {
  padding: 19px 30px !important;
}

.v-btn.v-size--x-large .btn-text {
  font-size: 20px;
  font-weight: 700;
}

.btn-dark:not(.v-btn--disabled) {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  border: solid 2px var(--v-primary-base) !important;
  background-color: var(--v-primary-base) !important;
  color: var(--v-surface-base) !important;
}

.btn-dark:hover {
  color: var(--v-primary-base) !important;
  background-color: var(--v-surface-base) !important;
}

.btn-dark:hover .btn-text {
  color: var(--v-primary-base) !important;
}
</style>
