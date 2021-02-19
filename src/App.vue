<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    }
  },
  data: () => ({})
};
</script>

<style>
.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.f-16 {
  font-size: 16px;
}

.f-19 {
  font-size: 19px;
}

.f-22 {
  font-size: 22px;
}

.f-24 {
  font-size: 24px;
}

@media (min-width: 960px) {
  .f-md-24 {
    font-size: 24px;
  }

  .f-md-30 {
    font-size: 30px;
  }

  .f-md-34 {
    font-size: 34px;
  }

  .f-md-40 {
    font-size: 40px;
  }
}

.f-27 {
  font-size: 27px;
}

.f-30 {
  font-size: 30px;
}

.f-40 {
  font-size: 40px;
}

.fw-9 {
  font-weight: 900;
}

:root {
  --v-anchor-base: #1b1d27;
  --v-theme-primary-base: #a4c0e8;
  --v-primary-base: #1b1d27;
  --v-primary-lighten5: #9193a0;
  --v-primary-lighten4: #777985;
  --v-primary-lighten3: #5e606c;
  --v-primary-lighten2: #474854;
  --v-primary-lighten1: #30323d;
  --v-primary-darken1: #010313;
  --v-primary-darken2: #000000;
  --v-primary-darken3: #000000;
  --v-primary-darken4: #000000;
  --v-secondary-base: #709ee0;
  --v-secondary-lighten5: #c1c1c1;
  --v-secondary-lighten4: #a6a6a6;
  --v-secondary-lighten3: #8b8b8b;
  --v-secondary-lighten2: #727272;
  --v-secondary-lighten1: #595959;
  --v-secondary-darken1: #2c2c2c;
  --v-secondary-darken2: #171717;
  --v-secondary-darken3: #000000;
  --v-secondary-darken4: #000000;
  --v-accent-base: #82b1ff;
  --v-accent-lighten5: #ffffff;
  --v-accent-lighten4: #f8ffff;
  --v-accent-lighten3: #daffff;
  --v-accent-lighten2: #bce8ff;
  --v-accent-lighten1: #9fccff;
  --v-accent-darken1: #6596e2;
  --v-accent-darken2: #467dc6;
  --v-accent-darken3: #2364aa;
  --v-accent-darken4: #004c90;
  --v-error-base: #ff5252;
  --v-error-lighten5: #ffe4d5;
  --v-error-lighten4: #ffc6b9;
  --v-error-lighten3: #ffa99e;
  --v-error-lighten2: #ff8c84;
  --v-error-lighten1: #ff6f6a;
  --v-error-darken1: #df323b;
  --v-error-darken2: #bf0025;
  --v-error-darken3: #9f0010;
  --v-error-darken4: #800000;
  --v-info-base: #2196f3;
  --v-info-lighten5: #d4ffff;
  --v-info-lighten4: #b5ffff;
  --v-info-lighten3: #95e8ff;
  --v-info-lighten2: #75ccff;
  --v-info-lighten1: #51b0ff;
  --v-info-darken1: #007cd6;
  --v-info-darken2: #0064ba;
  --v-info-darken3: #004d9f;
  --v-info-darken4: #003784;
  --v-success-base: #4caf50;
  --v-success-lighten5: #dcffd6;
  --v-success-lighten4: #beffba;
  --v-success-lighten3: #a2ff9e;
  --v-success-lighten2: #85e783;
  --v-success-lighten1: #69cb69;
  --v-success-darken1: #2d9437;
  --v-success-darken2: #00791e;
  --v-success-darken3: #006000;
  --v-success-darken4: #004700;
  --v-warning-base: #fb8c00;
  --v-warning-lighten5: #ffff9e;
  --v-warning-lighten4: #fffb82;
  --v-warning-lighten3: #ffdf67;
  --v-warning-lighten2: #ffc24b;
  --v-warning-lighten1: #ffa72d;
  --v-warning-darken1: #db7200;
  --v-warning-darken2: #bb5900;
  --v-warning-darken3: #9d4000;
  --v-warning-darken4: #802700;
  --v-primaryDark-base: #202020;
  --v-primaryDark-lighten5: #969696;
  --v-primaryDark-lighten4: #7d7d7d;
  --v-primaryDark-lighten3: #646464;
  --v-primaryDark-lighten2: #4c4c4c;
  --v-primaryDark-lighten1: #353535;
  --v-primaryDark-darken1: #080808;
  --v-primaryDark-darken2: #000000;
  --v-primaryDark-darken3: #000000;
  --v-primaryDark-darken4: #000000;
  --v-backgroundLight-base: #fcfcfc;
  --v-backgroundLight-lighten5: #ffffff;
  --v-backgroundLight-lighten4: #ffffff;
  --v-backgroundLight-lighten3: #ffffff;
  --v-backgroundLight-lighten2: #ffffff;
  --v-backgroundLight-lighten1: #ffffff;
  --v-backgroundLight-darken1: #dfdfdf;
  --v-backgroundLight-darken2: #c3c3c3;
  --v-backgroundLight-darken3: #a8a8a8;
  --v-backgroundLight-darken4: #8e8e8e;
  --v-backgroundDark-base: #f7f7f7;
  --v-backgroundDark-lighten5: #ffffff;
  --v-backgroundDark-lighten4: #ffffff;
  --v-backgroundDark-lighten3: #ffffff;
  --v-backgroundDark-lighten2: #ffffff;
  --v-backgroundDark-lighten1: #ffffff;
  --v-backgroundDark-darken1: #dbdbdb;
  --v-backgroundDark-darken2: #bfbfbf;
  --v-backgroundDark-darken3: #a4a4a4;
  --v-backgroundDark-darken4: #898989;
  --v-variant-base: #3c3d49;
  --v-variant-lighten5: #babbc9;
  --v-variant-lighten4: #9fa0ae;
  --v-variant-lighten3: #858693;
  --v-variant-lighten2: #6b6c7a;
  --v-variant-lighten1: #535461;
  --v-variant-darken1: #262732;
  --v-variant-darken2: #12131d;
  --v-variant-darken3: #000004;
  --v-variant-darken4: #000000;
  --v-surface-base: #f9f9f9;
  --v-surface-lighten5: #ffffff;
  --v-surface-lighten4: #ffffff;
  --v-surface-lighten3: #ffffff;
  --v-surface-lighten2: #ffffff;
  --v-surface-lighten1: #ffffff;
  --v-surface-darken1: #dcdcdc;
  --v-surface-darken2: #c1c1c1;
  --v-surface-darken3: #a5a5a5;
  --v-surface-darken4: #8b8b8b;
  --v-gray-base: #9798a6;
  --v-gray-lighten5: #ffffff;
  --v-gray-lighten4: #ffffff;
  --v-gray-lighten3: #e9eafa;
  --v-gray-lighten2: #cdcedd;
  --v-gray-lighten1: #b2b3c1;
  --v-gray-darken1: #7d7e8c;
  --v-gray-darken2: #646572;
  --v-gray-darken3: #4c4d5a;
  --v-gray-darken4: #353742;
  --v-white-base: #ffffff;
  --v-white-lighten5: #ffffff;
  --v-white-lighten4: #ffffff;
  --v-white-lighten3: #ffffff;
  --v-white-lighten2: #ffffff;
  --v-white-lighten1: #ffffff;
  --v-white-darken1: #e2e2e2;
  --v-white-darken2: #c6c6c6;
  --v-white-darken3: #ababab;
  --v-white-darken4: #919191;
  --v-havelockBlue-base: #4f86d9;
  --v-havelockBlue-lighten5: #e5ffff;
  --v-havelockBlue-lighten4: #c7f3ff;
  --v-havelockBlue-lighten3: #a9d6ff;
  --v-havelockBlue-lighten2: #8cbbff;
  --v-havelockBlue-lighten1: #6ea0f6;
  --v-havelockBlue-darken1: #2c6dbd;
  --v-havelockBlue-darken2: #0055a2;
  --v-havelockBlue-darken3: #003e87;
  --v-havelockBlue-darken4: #00296d;
}
</style>
