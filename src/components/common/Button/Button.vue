<template>
  <v-btn :class="styles" :x-large="xlarge" :dark="dark">
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
    }
  }
};
</script>

<style>
.btn-dark {
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
