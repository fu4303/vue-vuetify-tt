<template>
  <AuthLayout>
    <v-container>
      <div class="signup">
        <div class="d-flex justify-center signup-container">
          <div class="d-none d-md-flex flex-column img-container">
            <v-img
              src="https://hellopolygon.com/img/onboarding-L.e621f101.svg"
              class="signup-img left"
              contain
              width="200"
            />
          </div>

          <div class="px-14 content">
            <div v-if="type === 'A'">
              <v-lazy>
                <GetStarted @next="nextStep" />
              </v-lazy>
            </div>
            <div v-else-if="type === 'B'">
              <v-lazy>
                Hello B
              </v-lazy>
            </div>
            <div v-else-if="type === 'C'">
              <v-lazy>
                Hello C
              </v-lazy>
            </div>
            <div v-else>
              Not A/B/C
            </div>

            <div class="text-center font-weight-bold f-27 step">
              <span class="current">{{ step }}</span
              ><span>/3</span>
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

export default {
  name: 'Signup',
  components: {
    AuthLayout,
    GetStarted
  },
  data: () => ({
    type: 'A',
    step: 1,
    dialog: true
  }),
  methods: {
    nextStep() {
      this.addStep();
      this.switchStep('B');
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
}

.signup-img {
  max-height: 170px;
}

.signup-img.right {
  transform: translateY(150%);
}

.signup-img.left {
  transform: translateY(150%);
}

.content {
  height: 100%;
}

.step {
  color: var(--v-gray-base);
}

.step .current {
  color: var(--v-primary-base);
}
</style>
