import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home.vue";

const routes = [
    { path: "/", component: LayoutDefault, redirect: "/home", children: [
        {path: "/home", component: Home}
    ]}
];

export default {
    mode: "history",
    routes
};