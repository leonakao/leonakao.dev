import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueRouter);

const router = new VueRouter(routes);

Vue.config.productionTip = false;

new Vue({
    created(){
        AOS.init();
    },
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
