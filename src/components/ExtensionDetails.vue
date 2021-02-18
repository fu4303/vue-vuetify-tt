<template>
  <div class="d-flex flex-column align-center justify-center px-4">
    <div class="text-center mb-3">
      <h1 class="mb-2">
        Tired of being tracked online? We can help.
      </h1>
      <p class="mb-0">
        Get seamless privacy protection on your browser for free with one
        download:
      </p>
    </div>
    <ul
      class="d-flex justify-center align-sm-center flex-column flex-sm-row privacy-checklist"
    >
      <li
        class="d-block d-sm-flex justify-center align-sm-center mr-sm-4 mb-3 mb-sm-0"
      >
        <v-icon color="secondary" small class="mr-sm-2">
          mdi-checkbox-marked-circle
        </v-icon>
        <span class="font-weight-medium">
          Private Search
        </span>
      </li>
      <li
        class="d-block d-sm-flex justify-center align-sm-center mr-sm-4 mb-3 mb-sm-0"
      >
        <v-icon color="secondary" small class="mr-sm-2">
          mdi-checkbox-marked-circle
        </v-icon>
        <span class="font-weight-medium">
          Tracker Blocking
        </span>
      </li>

      <li class="d-block d-sm-flex justify-center align-sm-center">
        <v-icon color="secondary" small class="mr-sm-2">
          mdi-checkbox-marked-circle
        </v-icon>
        <span class="font-weight-medium">
          Site Encryption
        </span>
      </li>
    </ul>

    <Button
      text="Get started"
      styles="mt-6 mb-4 mx-auto btn-dark"
      xlarge
      to="/signup"
    />

    <v-btn
      text
      plain
      :ripple="false"
      class="d-flex align-center justify-center mx-auto text-capitalize"
      to="/rating"
    >
      <v-rating
        readonly
        v-model="rating"
        half-increments
        background-color="grey"
        color="primary"
        small
        dense
        class="mr-3"
      ></v-rating>

      <span>Rated {{ rating }}/5</span>
    </v-btn>
  </div>
</template>

<script>
import Button from '../components/common/Button';

export default {
  name: 'Home',
  components: {
    Button
  },
  data: () => ({
    rating: 4.9
  })
};
</script>

<style scoped>
.privacy-checklist {
  list-style-type: none;
  padding: 0;
}
</style>
