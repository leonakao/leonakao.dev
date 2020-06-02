<template>
    <v-content class="home">
        <v-container class="d-flex align-center">
            <v-row
                align-content="center"
                justify="center"
            >
                <v-col
                    cols="12"
                    lg="6"
                    xl="6"
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                >
                    <div class="box px-10">
                        <p class="display-1 font-weight-medium">
                            Olá, <br>
                            Eu me chamo <span class="primary--text">Leonardo Nakao</span>, <br>
                            e sou <span class="primary--text">Full Stack Developer</span>
                        </p>
                        <p class="headline secondary--text text-left">
                            Apaixonado por tecnologia e ama facilitar a vida das pessoas através do código
                        </p>
                    </div>
                </v-col>
                <v-col
                    cols="12"
                    lg="6"
                    xl="6"
                    class="text-center"
                    align-self="center"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                >
                    <v-btn
                        x-large
                        color="primary"
                        to="/about"
                    >
                        Como tudo começou
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            show: true
        };
    }
};
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.container {
    height: 100%;
}

</style>