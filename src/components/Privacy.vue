<template>
  <div class="privacy">
    <h4 class="mb-7 text-center">Privacy Protection For Any Device</h4>
    <div
      class="d-flex flex-column flex-md-row align-center justify-center mb-16 mb-md-0 privacy-container"
    >
      <div
        class="d-flex flex-column flex-md-row align-center justify-center privacy-columns"
      >
        <div
          class="d-flex flex-column align-center mb-4 mb-md-0 white py-6 px-6 mr-md-3 column"
        >
          <v-img
            src="https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"
            class="mx-auto my-5 privacy-img"
            contain
          />
          <div class="text-center">
            <h3 class="mb-2 fw-9">Privacy for Chrome</h3>
            <p>
              Browse as usual, and we'll take care of the rest. We bundled our
              search engine, tracker blocker, and encryption enforcer into one
              <a href="/" rel="noopener noreferrer" target="_blank">
                Chrome Extension </a
              >.
            </p>
          </div>
        </div>

        <div
          class="d-flex flex-column align-center mb-4 mb-md-0 white py-6 px-6 mx-md-3 column"
        >
          <v-img
            src="https://duckduckgo.com/assets/home/landing/icons/search.svg"
            class="mx-auto my-5 privacy-img"
            contain
          />
          <div class="text-center">
            <h3 class="mb-2 fw-9">Privacy for Chrome</h3>
            <p>
              Browse as usual, and we'll take care of the rest. We bundled our
              search engine, tracker blocker, and encryption enforcer into one
              <a href="/" rel="noopener noreferrer" target="_blank">
                Chrome Extension </a
              >.
            </p>
          </div>
        </div>

        <div
          class="d-flex flex-column align-center mb-4 mb-md-0 white py-6 px-6 ml-md-3 column"
        >
          <v-img
            src="https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg"
            class="mx-auto my-5 privacy-img"
            contain
          />
          <div class="text-center">
            <h3 class="mb-2 fw-9">Privacy for Chrome</h3>
            <p>
              Browse as usual, and we'll take care of the rest. We bundled our
              search engine, tracker blocker, and encryption enforcer into one
              <a href="/" rel="noopener noreferrer" target="_blank">
                Chrome Extension </a
              >.
            </p>
          </div>
        </div>
      </div>

      <svg
        class="d-none d-md-block content-info-curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1438 134"
      >
        <path
          d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
          fill="currentColor"
        ></path>
      </svg>
    </div>

    <div class="mt-16 mt-md-0 onboarding">
      <svg
        class="d-block d-md-none content-info-curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1438 134"
      >
        <path
          d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
          fill="currentColor"
        ></path>
      </svg>
      <div class="d-flex flex-column align-center content">
        <h2 class="white--text mb-4 fw-9">
          We don’t store your personal information. Ever.
        </h2>
        <p class="white--text">
          Our privacy policy is simple: we don’t collect or share any of your
          personal information.
        </p>

        <Button
          text="Get started"
          dark
          xlarge
          @click="handleClick"
          to="/signup"
        />
      </div>
      <div class="img-container">
        <v-img
          src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"
          contain
          class="onboarding-img"
        />
      </div>
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
  methods: {
    handleClick() {
      this.$root.$router.push({
        path: `/rating`
      });
    }
  }
};
</script>

<style scoped>
.privacy-container {
  box-sizing: border-box;
  position: sticky;
  width: 100%;
  max-width: 1140px;
  min-height: 322px;
  margin-right: auto;
  margin-left: auto;
  margin: 30px auto 0;
  padding: 0 40px;
}

@media (min-width: 960px) {
  .privacy-container:after {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100vw;
    content: ' ';
    height: calc(100% - 180px);
    z-index: -1;
    background-color: var(--v-theme-primary-base);
  }
}

.privacy-columns {
  width: 100%;
  max-width: 1140px;
  min-height: 322px;
}

.privacy-columns .column {
  width: 332px;
  min-height: 322px;
  border-radius: 18px;
  box-shadow: 0px 10px 16px -8px rgb(0 0 0 / 20%);
}

.privacy-img {
  width: auto;
  min-height: 72px;
  max-height: 72px;
}

.content-info-curve {
  color: var(--v-theme-primary-base);
  transform: translateY(-25%);
}

@media (min-width: 960px) {
  .content-info-curve {
    position: absolute;
    top: 120px;
    bottom: -2px;
    transform: translateY(-25%);
    width: 100vw;

    color: var(--v-theme-primary-base);
    z-index: -1;
  }
}

.onboarding {
  height: auto;
  width: 100%;
  background-color: var(--v-theme-primary-base);
}

.onboarding .content {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

@media (min-width: 960px) {
  .onboarding .content {
    width: 40%;
  }
}

.onboarding .img-container {
  position: static;
  height: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.onboarding .img-container .onboarding-img {
  position: relative;
  bottom: auto;
  left: auto;
  right: auto;
  max-width: 890px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
