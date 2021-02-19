<template>
  <AuthLayout>
    <v-container>
      <div class="signup">
        <div class="d-flex justify-md-space-between signup-container">
          <div class="d-none d-md-flex flex-column img-container">
            <v-img
              src="https://hellopolygon.com/img/onboarding-L.e621f101.svg"
              class="signup-img left"
              contain
              width="200"
            />
          </div>

          <div class="px-4 px-md-0 content">
            <div class="inner-content">
              <div v-if="type === 'A'">
                <v-lazy>
                  <GetStarted @next="next" />
                </v-lazy>
              </div>
              <div v-else-if="type === 'B'">
                <v-lazy>
                  <Assessment @next="next" />
                </v-lazy>
              </div>
              <div v-else-if="type === 'C'">
                <v-lazy>
                  <Contact />
                </v-lazy>
              </div>
              <div v-else>
                Not A/B/C
              </div>

              <div class="mt-6 text-center font-weight-bold f-30 step">
                <span class="current">{{ step }}</span
                ><span>/3</span>
              </div>
            </div>
          </div>
          <div class="d-none d-md-flex flex-column img-container">
            <v-img
              src="https://hellopolygon.com/img/onboarding-R.fa5dcb58.svg"
              class="signup-img right"
              contain
              width="200"
            />
          </div>
        </div>
      </div>
    </v-container>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../components/Layouts/AuthLayout';
import GetStarted from '../components/Forms/GetStarted';
import Assessment from '../components/Forms/Assessment';
import Contact from '../components/Forms/Contact';

export default {
  name: 'Signup',
  components: {
    AuthLayout,
    GetStarted,
    Assessment,
    Contact
  },
  data: () => ({
    type: 'A',
    step: 1,
    dialog: true
  }),
  methods: {
    next(value) {
      this.addStep();
      this.switchStep(value);
    },
    addStep() {
      this.step += 1;
    },
    switchStep(type) {
      this.type = type;
    }
  }
};
</script>

<style scoped>
.signup-container {
  min-height: 100vh;
  max-width: 55rem;
  margin: 0 auto;
}

.signup-img {
  max-height: 150px;
  max-width: 150px;
}

.signup-img.right {
  transform: translateY(150%);
}

.signup-img.left {
  transform: translateY(150%);
}

.content {
  width: 100%;
  height: 100%;
}

.step {
  color: var(--v-gray-base);
}

.step .current {
  color: var(--v-primary-base);
}
</style>
