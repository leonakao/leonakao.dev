import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#9c27b0",
                secondary: "#673ab7",
                accent: "#ff9800",
                error: "#e91e63",
                warning: "#ff5722",
                info: "#00bcd4",
                success: "#4caf50"
            }
        }
    },
});
