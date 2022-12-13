<template>
    <div class="info">
        <div class="info__content">
            <the-form>
                <form-row type="flex">
                    <form-row-input id="firstname" type="text" label="First Name" inputName="firstName" placeholder="Your firstname"></form-row-input>
                    <form-row-input id="lastname" type="text" label="Last Name" inputName="lastName" placeholder="Your lastname"></form-row-input>
                </form-row>
                <form-row type="flex">
                    <form-row-input id="email" type="email" label="Email Address" inputName="email" placeholder="Your email"></form-row-input>
                    <form-row-input id="phone" type="phone" label="Phone Number" inputName="phone" placeholder="Your phone"></form-row-input>
                </form-row>
                <form-row type="flex">
                    <form-row-input id="position" type="text" label="Position" inputName="position" placeholder="Your position"></form-row-input>
                    <form-row-multiselect :options="options" label="Available Companies" inputName="position" ></form-row-multiselect>
                </form-row>
            </the-form>
        </div>
        <div class="info__bottom">
            <div class="info__switcher">
                <the-switcher></the-switcher>
                <div class="info__label">Active in all companies</div>
                <div class="info__icon">
                   <icon-info/>
                </div>
            </div>
            <div class="info__actions">
                <the-button size="medium" color="blue">Next Step</the-button>
            </div>
        </div>
    </div>
</template>

<script>
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