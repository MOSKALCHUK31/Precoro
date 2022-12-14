<template>
    <div class="switcher" :class="isActive" :disabled="false" @click="handleToggle">
        <div class="switcher__holder"></div>
        <div class="switcher__track"></div>
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        isActive() {
            let classString = ''

            if (this.disabled) classString += 'disabled '
            if (this.active) classString += 'is-active'

            return classString
        }
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        handleToggle() {
           if (!this.disabled) this.active = !this.active
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

    &.disabled {
        .switcher__holder {
            background: #f6f4f4;
        };

        .switcher__track {
            background: #415ADA;
        };
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