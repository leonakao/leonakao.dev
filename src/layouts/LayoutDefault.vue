<template>
    <div class="layout">
        <router-view />
        <v-navigation-drawer
            v-model="drawer"
            :expand-on-hover="true"
            :mini-variant="true"
            :right="true"
            :permanent="true"
            absolute
            dark
        >
            <v-list
                dense
                nav
                class="py-0"
            >
                <v-list-item two-line class="px-0">
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Leonardo Nakao</v-list-item-title>
                        <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: undefined
        };
    }
};
</script>

<style>
body {
    background: rgb(34, 34, 34) none repeat scroll 0% 0%;
    margin: 0 !important;
}

</style>