<template>
    <v-app class="layout">
        <v-navigation-drawer
            v-model="drawer"
            :expand-on-hover="true"
            :mini-variant="true"
            :right="true"
            color="#1B1B1B"
            fixed
            dark
            app
        >
            <v-list
                dense
                nav
                class="py-0"
                flat
            >
                <v-list-item
                    two-line
                    class="px-0"
                >
                    <v-list-item-avatar>
                        <img src="../assets/images/profile.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Leonardo Nakao</v-list-item-title>
                        <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider />

                <v-list-item
                    v-for="item in navItems"
                    :key="item.text"
                    :to="item.route"
                    link
                    color="primary"
                >
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
                    <v-list-item
                        v-for="item in socialItems"
                        :key="item.text"
                        target="blank"
                        :href="item.route"
                        link
                    >
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
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: undefined,
            navItems: [
                {icon: "mdi-home-outline", text: "Página Inicial", route: "/home"},
                {icon: "mdi-account-outline", text: "Sobre mim", route: "/about"},
                {icon: "mdi-medal-outline", text: "Conhecimentos", route: "/features"},
                {icon: "mdi-monitor-cellphone-star", text: "Alguns projetos", route: "/projects"},
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

.v-application {
    background-color: #121212 !important;
    background-image: linear-gradient(to bottom left, #1B1B1B, #000) !important;
}
</style>