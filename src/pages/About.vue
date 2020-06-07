<template>
    <v-container
        class="pt-12 px-10"
        fluid
    >
        <v-row
            align-content="center"
            justify="center"
        >
            <v-col
                cols="12"
                lg="6"
                xl="6"
                class="text-justify"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <h1 class="primary--text mb-5">
                    Um pouco sobre mim
                </h1>
                <p class="body-1 ">
                    {{ text }}
                </p>
            </v-col>
            <v-col
                cols="12"
                lg="6"
                xl="6"
                class="py-12 d-flex align-center"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <v-carousel
                    hide-delimiters
                    height="400"
                >
                    <v-carousel-item
                        :src="require('../assets/images/event1.jpg')"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    >
                        <v-row
                            class="fill-height"
                            align="end"
                            justify="center"
                        >
                            <div class="event-subtitle py-4 subtitle-1 font-weight-bold">
                                Hackathon New Way - 1º Lugar (2019)
                            </div>
                        </v-row>
                    </v-carousel-item>
                    <v-carousel-item
                        :src="require('../assets/images/event2.jpg')"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    >
                        <v-row
                            class="fill-height"
                            align="end"
                            justify="center"
                        >
                            <div class="event-subtitle py-4 subtitle-1 font-weight-bold">
                                Técnicas de Invasão Experience (2018)
                            </div>
                        </v-row>
                    </v-carousel-item>
                    <v-carousel-item
                        :src="require('../assets/images/event3.jpg')"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    >
                        <v-row
                            class="fill-height"
                            align="end"
                            justify="center"
                        >
                            <div class="event-subtitle py-4 subtitle-1 font-weight-bold">
                                Curso de Robótica Ministrado (2018)
                            </div>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        text: `
        Eu sou Leonardo Nakao e vou contar um pouco sobre como começou
        Duis nulla culpa nulla laborum ea excepteur laboris fugiat commodo aliqua sit excepteur. Do ipsum aliquip sunt dolore dolor laborum labore ipsum deserunt exercitation. Do mollit dolore eiusmod duis mollit aute dolor nulla occaecat labore exercitation occaecat elit nostrud. Veniam fugiat deserunt aliqua deserunt in exercitation laborum.
        Aute ea et aute nulla commodo occaecat aliqua. Eu reprehenderit qui sint velit culpa est exercitation dolor. Esse qui sit adipisicing aliquip irure eiusmod quis fugiat anim ipsum.

        Irure eu aliquip minim id nostrud. Exercitation magna cupidatat ullamco fugiat laborum velit. Occaecat amet incididunt aliqua eu ut quis veniam commodo non tempor culpa ex fugiat. Ipsum aute occaecat deserunt Lorem labore excepteur id ipsum. Eiusmod Lorem magna occaecat velit in consectetur pariatur nisi. Esse laboris qui laborum aute ut. Qui qui officia eu minim laborum veniam officia dolore aliqua cupidatat fugiat consequat Lorem amet.

        Sunt commodo ad exceing velit aute tempor Lorem magna esse ad nostrud qui. Tempor sit ex ex sit. Mollit pariatur occaecat consectetur deserunt sint do culpa incididunt fugiat consequat. Mollit sunt irure consequat elit nisi mollit nisi sit adipisicing.
        `
    })
};
</script>

<style scoped>
    .container {
        height: 100%;
    }

    .event-subtitle {
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>