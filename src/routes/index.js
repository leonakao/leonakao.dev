import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const routes = [
    { path: "/", component: LayoutDefault, redirect: "/home", children: [
        {path: "/home", component: Home},
        {path: "/about", component: About},
        {path: "*", redirect: "/home"}
    ]}
];

export default {
    mode: "history",
    routes
};