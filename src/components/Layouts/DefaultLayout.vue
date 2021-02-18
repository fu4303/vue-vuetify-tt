<template>
  <div class="default-layout">
    <Navbar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<script>
import Navbar from '../Navbar';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
};
</script>
