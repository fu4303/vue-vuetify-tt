<template>
  <div class="mt-6">
    <h4 class="mb-5 text-center">Privacy Protection For Any Device</h4>
    <v-row
      class="d-flex flex-column flex-md-row align-center justify-center privacy-list"
    >
      <v-col cols="12" md="4" class="privacy-column">
        <div class="px-5 py-5 white rounded-lg">
          <v-img
            src="https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"
            class="mx-auto my-5 privacy-img"
            contain
          />
          <div class="text-center">
            <h3 class="mb-2">Privacy for Chrome</h3>
            <p>
              Browse as usual, and we'll take care of the rest. We bundled our
              search engine, tracker blocker, and encryption enforcer into one
              <a href="/" rel="noopener noreferrer" target="_blank">
                Chrome Extension </a
              >.
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4" class="privacy-column">
        <div class="px-5 py-5 white rounded-lg">
          <v-img
            src="https://duckduckgo.com/assets/home/landing/icons/search.svg"
            class="mx-auto my-5 privacy-img"
            contain
          />
          <div class="text-center">
            <h3 class="mb-2">Privacy for Chrome</h3>
            <p>
              Browse as usual, and we'll take care of the rest. We bundled our
              search engine, tracker blocker, and encryption enforcer into one
              <a href="/" rel="noopener noreferrer" target="_blank">
                Chrome Extension </a
              >.
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4" class="privacy-column">
        <div class="px-5 py-5 white rounded-lg">
          <v-img
            src="https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg"
            class="mx-auto my-5 privacy-img"
            contain
          />
          <div class="text-center">
            <h3 class="mb-2">Privacy for Chrome</h3>
            <p>
              Browse as usual, and we'll take care of the rest. We bundled our
              search engine, tracker blocker, and encryption enforcer into one
              <a href="/" rel="noopener noreferrer" target="_blank">
                Chrome Extension </a
              >.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="d-flex flex-column align-center my-6">
      <h3>We don’t store your personal information. Ever.</h3>
      <p>
        Our privacy policy is simple: we don’t collect or share any of your
        personal information.
      </p>

      <Button text="Get started" styles="btn-dark" />
    </div>
  </div>
</template>
<script>
import Button from '../components/common/Button';

export default {
  name: 'Privacy',
  components: {
    Button
  },
  data: () => ({})
};
</script>

<style scoped>
.privacy-list {
  width: 100%;
  max-width: 970px;
  min-height: 322px;
  margin-right: auto;
  margin-left: auto;
}

.privacy-img {
  width: auto;
  min-height: 72px;
  max-height: 72px;
}

.privacy-column {
  width: 290px;
  max-width: 90%;
}

@media (min-width: 600px) {
  .privacy-column {
    width: 100%;
    max-width: 332px;
  }
}
</style>
