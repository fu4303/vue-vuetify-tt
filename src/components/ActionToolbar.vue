<template>
  <div class="white px-4 py-5 action-toolbar">
    <v-container>
      <div class="d-flex align-center toolbar">
        <router-link to="/">
          <Logo />
        </router-link>

        <v-spacer></v-spacer>

        <v-btn icon to="/">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import Logo from './Logo';

export default {
  name: 'ActionToolbar',
  components: {
    Logo
  }
};
</script>

<style scoped>
.action-toolbar {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}

.action-toolbar .logo {
  max-height: 30px;
}
</style>
