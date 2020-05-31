<template>
    <v-app class="layout">
        <router-view />
        <v-navigation-drawer
            v-model="drawer"
            :expand-on-hover="true"
            :mini-variant="true"
            :right="true"
            :permanent="true"
            fixed
            dark
        >
            <v-list
                dense
                nav
                class="py-0"
            >
                <v-list-item two-line class="px-0">
                    <v-list-item-avatar>
                        <img src="../assets/images/profile.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Leonardo Nakao</v-list-item-title>
                        <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item v-for="item in navItems" :key="item.text" :to="item.route" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <v-list>
                    <v-list-item v-for="item in socialItems" :key="item.text" target="blank" :href="item.route" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: undefined,
            navItems: [
                {icon: "mdi-home", text: "Página Inicial", route: "/home"},
                {icon: "mdi-account", text: "Sobre mim", route: "/about"},
                {icon: "mdi-medal", text: "Algumas conquistas", route: "/project"},
            ],

            socialItems: [
                {icon: "mdi-linkedin", text: "Linkedin", route: "https://www.linkedin.com/in/leonardo-nakao/"},
                {icon: "mdi-github", text: "Github", route: "https://github.com/leonakaodev"},
                {icon: "mdi-instagram", text: "Instagram", route: "https://www.instagram.com/leonakao/"},
                {icon: "mdi-facebook", text: "Facebook", route: "https://www.facebook.com/leonardo.nakao"},
            ]
        };
    }
};
</script>

<style>
body {
    margin: 0 !important;
}
</style>