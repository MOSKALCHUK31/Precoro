<template>
    <div class="info">
        <div class="info__content">
            <the-form>
                <form-row type="flex">
                    <form-row-input id="firstname" type="text" label="First Name" inputName="firstName" placeholder="Your firstname" :disabled="disabled"></form-row-input>
                    <form-row-input id="lastname" type="text" label="Last Name" inputName="lastName" placeholder="Your lastname" :disabled="disabled"></form-row-input>
                </form-row>
                <form-row type="flex">
                    <form-row-input id="email" type="email" label="Email Address" inputName="email" placeholder="Your email" :disabled="disabled"></form-row-input>
                    <form-row-input id="phone" type="phone" label="Phone Number" inputName="phone" placeholder="Your phone" :disabled="disabled"></form-row-input>
                </form-row>
                <form-row type="flex">
                    <form-row-input id="position" type="text" label="Position" inputName="position" placeholder="Your position" :disabled="disabled"></form-row-input>
                    <form-row-multiselect :options="options" label="Available Companies" inputName="position" :disabled="disabled"></form-row-multiselect>
                </form-row>
            </the-form>
        </div>
        <div class="info__bottom">
            <div class="info__switcher">
                <the-switcher :disabled="disabled"></the-switcher>
                <div class="info__label">Active in all companies</div>
                <div class="info__icon">
                   <icon-info/>
                </div>
            </div>
            <div class="info__actions">
                <the-button link to="/locations" size="medium" color="blue" @click="handleSubmit">Next Step</the-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import IconInfo from '../icons/IconInfo'
import TheSwitcher from '../ui/TheSwitcher'

export default {
    components: {
        IconInfo,
        TheSwitcher
    },
    data() {
        return {
            options: [
                { name: 'Precoro-1', language: 'Precoro-1' },
                { name: 'Precoro-2', language: 'Precoro-2' },
                { name: 'Precoro-3', language: 'Precoro-3' },
                { name: 'Precoro-4', language: 'Precoro-4' },
            ]
        }
    },
    computed: {
        ...mapGetters({
            disabled: 'getInputState'
        })
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch('HANDLE_CONFIRM_MAIN_INFO_ACTION')
        }
    }
}
</script>

<style scoped lang="scss">
.info {
    &__content {
        padding: 20px 24px 30px 24px;
        border-bottom: 1px solid rgba(#000, .1);
    }

    &__bottom {
        padding: 30px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__switcher {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>