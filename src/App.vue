<template>
    <base-card>
        <the-header></the-header>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component"></component>
            </keep-alive>
        </router-view>
    </base-card>
</template>

<script>
import TheHeader from './components/ui/TheHeader'

export default {
    components: {
        TheHeader
    }
}
</script>

<style lang="scss">
@import './assets/library/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

*,
*::before,
*::after {
    box-sizing: border-box;
}

*:focus {
    outline: none;
}

body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(#1D245280, .5);
    background-color: #fafafa;
}

a {
    text-decoration: none;
}

</style>
