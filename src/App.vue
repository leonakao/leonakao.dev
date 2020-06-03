<template>
    <router-view />
</template>

<script>
export default {
};
</script>

<style>
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.3s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }

    .slide-down-enter-active,
    .slide-down-leave-active,
    .slide-up-enter-active,
    .slide-up-leave-active {
        transition-duration: 0.3s;
        transition-property: width, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-down-enter,
    .slide-up-leave-active {
        opacity: 0;
        transform: translate(0, 2em);
    }

    .slide-down-leave-active,
    .slide-up-enter {
        opacity: 0;
        transform: translate(0, -2em);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
