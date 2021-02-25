<template>
  <DefaultLayout>
    <div class="d-flex flex-column align-center justify-center not-found">
      <h4 class="f-30">404</h4>
      <p class="text">Page NotFound</p>
      <Button text="Back to Homepage" dark xlarge to="/" />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../components/Layouts/DefaultLayout';
import Button from '../components/common/Button';

export default {
  components: {
    DefaultLayout,
    Button
  }
};
</script>

<style scoped>
.not-found .text {
  color: var(--v-gray-base);
}
</style>
