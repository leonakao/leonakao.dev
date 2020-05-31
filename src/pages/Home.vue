<template>
    <v-content class="home">
        <div class="box-text d-flex">
            <div class="text">
                <p class="display-2 font-weight-medium">
                    Olá, <br>
                    Eu me chamo <span class="primary--text">Leonardo Nakao</span>, <br>
                    e sou <span class="primary--text">Full Stack Developer</span>
                </p>
                <p class="headline secondary--text">
                    Apaixonado por tecnologia e ama facilitar a vida das pessoas através do código
                </p>
            </div>
        </div>
    </v-content>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.box-text {
    padding: 15%;
    height: 100%;
}

.text {
    margin: auto 0;
}


</style>