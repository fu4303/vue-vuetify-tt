<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      md="8"
      offset-md="2"
      class="d-flex flex-column align-center"
    >
      <div class="text-center mb-3">
        <h2 class="font-weight-large mb-2">
          Tired of being tracked online? We can help.
        </h2>
        <p>
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
          <span>
            Private Search
          </span>
        </li>
        <li
          class="d-block d-sm-flex justify-center align-sm-center mr-sm-4 mb-3 mb-sm-0"
        >
          <v-icon color="secondary" small class="mr-sm-2">
            mdi-checkbox-marked-circle
          </v-icon>
          <span>
            Tracker Blocking
          </span>
        </li>

        <li class="d-block d-sm-flex justify-center align-sm-center">
          <v-icon color="secondary" small class="mr-sm-2">
            mdi-checkbox-marked-circle
          </v-icon>
          <span>
            Site Encryption
          </span>
        </li>
      </ul>

      <Button text="Get started" class="d-block mt-6 mb-4 mx-auto btn-dark" />

      <v-btn
        text
        plain
        :ripple="false"
        class="d-flex align-center justify-center mx-auto"
        @click="ratingClick"
      >
        <v-rating
          readonly
          v-model="rating"
          half-increments
          background-color="grey"
          color="black"
          small
          dense
          class="mr-3"
        ></v-rating>

        <span>Rated {{ rating }}/5</span>
      </v-btn>
    </v-col>
  </v-row>
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
  }),
  methods: {
    ratingClick() {
      this.$root.$router.push({
        path: `/rating`
      });
    }
  }
};
</script>

<style scoped>
.privacy-checklist {
  list-style-type: none;
  padding: 0;
}
</style>
