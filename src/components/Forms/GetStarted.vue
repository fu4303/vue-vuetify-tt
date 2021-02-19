<template>
  <div class="get-started">
    <h1 class="text-center f-24 f-md-40">Hello!</h1>
    <div class="content">
      <div class="d-flex flex-column white intro-card">
        <p class="font-weight-medium f-19 f-md-24 intro-title">
          Let's get you started with a free consultation.
        </p>
      </div>

      <Button
        text="Continue"
        styles="d-flex mx-auto mb-6 btn-dark next-btn"
        xlarge
        @click="next('B')"
      />
      <p class="text-center mb-0 signin-link-box">
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
    next(value) {
      this.$emit('next', value);
    }
  }
};
</script>

<style scoped>
.get-started .content {
  width: 100%;
}

.next-btn {
  width: 100%;
}

.intro-card {
  margin: 30px auto 50px auto;
  height: 9rem;
  width: 17rem;
  -webkit-transform: rotate(-3deg);
  transform: rotate(-3deg);
}

.intro-card .intro-title {
  text-align: center;
  padding: 45px 30px;
  -webkit-transform: rotate(3deg);
  transform: rotate(3deg);
}

@media (min-width: 600px) {
  .get-started .content {
    margin: 0 auto;
    width: 28rem;
  }

  .intro-card {
    height: 9rem;
    width: 20rem;
  }

  .intro-card .intro-title {
    padding: 45px 50px;
  }

  .next-btn {
    width: 22rem;
  }
}

@media (min-width: 960px) {
  .intro-card {
    margin-top: 100px;
    margin-bottom: 120px;
    height: 10rem;
    width: 27rem;
  }
}

.signin-link-box {
  color: var(--v-gray-base);
}

.signin-link-box .link {
  text-decoration: none;
}
</style>
