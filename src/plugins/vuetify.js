import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1b1d27',
        secondary: '#709ee0',
        surface: '#f9f9f9',
        accent: colors.shades.black,
        error: '#ff5252',
        background: '#f7f7f7'
      },
      dark: {
        primary: colors.shades.black,
        secondary: colors.grey.darken1,
        surface: '#f9f9f9',
        accent: colors.shades.black,
        error: '#ff5252',
        background: colors.grey.darken1
      }
    }
  }
});
