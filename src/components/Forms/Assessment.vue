<template>
  <div class="assessment">
    <h1 class="text-center f-24 f-md-40 mb-4">Who's this assessment for?</h1>
    <div class="content">
      <v-item-group class="assessment-list">
        <v-item
          v-for="(item, i) in items"
          :key="i"
          class="d-flex align-center justify-center mb-4 item"
        >
          <v-card
            :class="active === item.key ? 'active-card' : ''"
            @click="selectTarget(item.key)"
          >
            <h3>
              {{ item.name }}
            </h3>
          </v-card>
        </v-item>
      </v-item-group>

      <Button
        :disabled="disabled"
        text="Continue"
        styles="d-flex mx-auto mt-6 btn-dark w-100"
        xlarge
        @click="next('C')"
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
  data: () => ({
    active: '',
    disabled: true,
    items: [
      {
        key: 'myself',
        name: 'Myself'
      },
      {
        key: 'child',
        name: 'My child'
      },
      {
        key: 'else',
        name: 'Someone else'
      }
    ]
  }),
  methods: {
    next(value) {
      this.$emit('next', value);
    },
    selectTarget(value) {
      this.active = value;
      this.disabled = false;
    }
  }
};
</script>

<style scoped>
.assessment-list .item {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  /* width: 18rem; */
  height: 5rem;
  margin: 0 auto;
}

@media (min-width: 600px) {
  .assessment .content {
    width: 24rem;
    margin: 0 auto;
  }

  .assessment-list .item {
    height: 6rem;
  }
}

.assessment-list .item:hover {
  border: solid 2px var(--v-primary-base) !important;
}

.assessment-list .item:focus {
  border: solid 2px var(--v-primary-base) !important;
}

.assessment-list .item.active-card {
  border: solid 2px var(--v-primary-base) !important;
}
</style>
