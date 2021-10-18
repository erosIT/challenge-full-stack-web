import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import pt from "vuetify/lib/locale/pt";

export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt",
  },
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
