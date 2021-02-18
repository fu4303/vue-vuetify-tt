<template>
  <div class="auth-layout">
    <ActionToolbar />
    <v-main class="pt-10">
      <slot />
    </v-main>
  </div>
</template>

<script>
import ActionToolbar from '../ActionToolbar';

export default {
  name: 'AuthLayout',
  components: {
    ActionToolbar
  }
};
</script>
