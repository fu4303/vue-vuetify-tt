<template>
  <div>
    <h1 class="text-center f-40">Hello!</h1>
    <div class="d-flex flex-column white intro-card">
      <p class="font-weight-medium f-19 f-md-24 intro-title">
        Let's get you started with a free consultation.
      </p>
    </div>

    <div class="get-started">
      <Button
        text="Continue"
        styles="mb-6 btn-dark intro-btn"
        xlarge
        @click="next"
      />
      <p class="text-center signin-link-box">
        Already have an account?
        <router-link to="/signin" class="font-weight-bold link"
          >Sign in</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import Button from '../common/Button';

export default {
  name: 'Signup',
  components: {
    Button
  },
  methods: {
    next() {
      this.$emit('next');
    }
  }
};
</script>

<style scoped>
.intro-card {
  margin-top: 30px;
  margin-bottom: 50px;
  height: 150px;
  width: 250px;
  -webkit-transform: rotate(-3deg);
  transform: rotate(-3deg);
}

.intro-card .intro-title {
  text-align: center;
  padding: 40px 45px;
  -webkit-transform: rotate(3deg);
  transform: rotate(3deg);
}

@media (min-width: 960px) {
  .intro-card {
    margin-top: 100px;
    margin-bottom: 100px;
    height: 150px;
    width: 450px;
  }
  .intro-card .intro-title {
    padding: 45px 80px;
  }
}

.intro-btn {
  width: 100%;
}

.signin-link-box {
  color: var(--v-gray-base);
}

.signin-link-box .link {
  text-decoration: none;
}
</style>
