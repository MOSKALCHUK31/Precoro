<template>
    <div class="locations">
        <div class="locations__content">
            <accordion>
                <accordion-item :count="count" title="Precoro">
                    <div class="location-main">
                        <div class="location-main__select">
                            <form-row-select id="main-location" name="main-location" label="Main Location *" :options="options" :disabled="disabled"></form-row-select>
                        </div>
                        <div class="location-main__select-all">
                            <form-row-checkbox id="select-all-locations" label="Select All Locations" name="select-all-locations" :disabled="disabled"></form-row-checkbox>
                        </div>
                        <div class="location-main__available">
                            <div class="location-main__label">Available Locations</div>
                            <div class="location-main__content">
                                <div class="location-main__left">
                                    <form-row-checkbox id="berlin" label="Berlin" name="berlin" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                    <form-row-checkbox id="venice" label="Venice Office" name="venice" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                    <form-row-checkbox id="usa" label="USA Office" name="usa" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                    <form-row-checkbox id="canada" label="Canada" name="canada" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                </div>
                                <div class="location-main__right">
                                    <form-row-checkbox id="poland" label="Poland Office" name="poland" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                    <form-row-checkbox id="mexico" label="Mexico" name="mexico" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                    <form-row-checkbox id="ukraine" label="Ukraine Kiyv Lukivska 7 Main Office" name="ukraine" :disabled="disabled" @changeEvent="handleSetQuantity"></form-row-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </accordion-item>
                <accordion-item :count="0" title="Precoro Development">
                    test content => ...
                </accordion-item>
                <accordion-item :count="0" title="Procurement">
                    test content => ...
                </accordion-item>
            </accordion>
        </div>
        <div class="locations__actions">
            <the-button link to="/docs" size="medium" color="blue">Next Step</the-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            count: 0,
            options: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5']
        }
    },
    computed: {
        ...mapGetters({
            disabled: 'getInputState'
        })
    },
    methods: {
        handleSetQuantity(payload) {
            if (payload) this.count = this.count + 1
            else this.count = this.count - 1
        }
    }
}
</script>

<style scoped lang="scss">
.locations {
    &__content {
        padding: 24px;
        border-bottom: 1px solid #DDDEE5;
    }

    &__actions {
        padding: 24px;
        display: flex;
        justify-content: flex-end;
    }
}

.location-main {
    &__select {
        max-width: 350px;
        width: 100%;
    }

    &__select-all {
        margin-top: 20px;
    }

    &__content {
        display: flex;
        gap: 50px;
    }

    &__available {
        margin-top: 16px;
    }

    &__label {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(#1D2452, .6);
    }
}
</style>