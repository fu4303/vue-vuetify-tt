<template>
  <div>
    <h1 class="text-center f-40">Who's this assessment for?</h1>

    <div class="get-started">
      <Button
        text="Continue"
        styles="mb-6 btn-dark intro-btn"
        xlarge
        @click="handleContinue"
      />
    </div>
  </div>
</template>

<script>
import Button from '../common/Button';

export default {
  name: 'Assessment',
  components: {
    Button
  },
  data: () => ({}),
  methods: {
    handleContinue() {
      this.$emit('continue');
    }
  }
};
</script>

<style scoped></style>
