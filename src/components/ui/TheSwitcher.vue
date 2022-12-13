<template>
    <div class="switcher" :class="isActive" @click="handleToggle">
        <div class="switcher__holder"></div>
        <div class="switcher__track"></div>
    </div>
</template>

<script>
export default {
    computed: {
        isActive() {
            if (this.active) return 'is-active'
        }
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        handleToggle() {
            if (this.active) {
                this.active = false
                return
            }

            this.active = true
        }
    }
}
</script>

<style scoped lang="scss">
.switcher {
    position: relative;
    width: 44px;
    height: 24px;
    padding: 2px;

    &.is-active {
        .switcher__track {
            left: calc(100% - 20px);
        }
    }

    &__holder {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background: #415ADA;
        border-radius: 12px;
    }

    &__track {
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        z-index: 10;
        background: #fff;
    }
}
</style>