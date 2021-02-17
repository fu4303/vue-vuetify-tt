<template>
  <v-container>
    <div class="mt-3 mb-6">
      <Logo />
    </div>
    <Search />
    <ExtensionDetails />
    <Privacy />
    <FAQ />

    <div class="text-center my-6">
      <Button text="Get started" class="btn-dark" />
    </div>
  </v-container>
</template>

<script>
import Logo from '../components/Logo';
import Search from '../components/Search';
import ExtensionDetails from '../components/ExtensionDetails';
import Privacy from '../components/Privacy';
import FAQ from '../components/FAQ';
import Button from '../components/common/Button';

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    ExtensionDetails,
    Privacy,
    FAQ,
    Button
  },
  data: () => ({})
};
</script>
