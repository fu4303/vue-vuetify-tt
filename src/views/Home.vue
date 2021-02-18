<template>
  <DefaultLayout>
    <div class="mt-3 mb-9">
      <Logo />
    </div>
    <div class="mb-2 px-4">
      <Search />
    </div>

    <div class="mb-12">
      <ExtensionDetails />
    </div>

    <div class="mb-16">
      <Privacy />
    </div>

    <FAQ />

    <div class="text-center my-9">
      <Button text="Get started" styles="btn-dark" xlarge to="/signup" />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../components/Layouts/DefaultLayout';
import Logo from '../components/Logo';
import Search from '../components/Search';
import ExtensionDetails from '../components/ExtensionDetails';
import Privacy from '../components/Privacy';
import FAQ from '../components/FAQ';
import Button from '../components/common/Button';

export default {
  name: 'Home',
  components: {
    DefaultLayout,
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
