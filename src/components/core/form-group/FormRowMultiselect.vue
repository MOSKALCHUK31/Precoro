<template>
    <div class="form__row">
        <label class="form__label">{{ label }}</label>
        <multiselect v-model="value" :limit="2" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :disabled="disabled" :searchable="false" :limit-text="count => `+${count}`">
            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
        </multiselect>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        label: {
            type: String,
            required: true,
        },
        inputName: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            value: []
        }
    }
}
</script>

<style scoped lang="scss">
.form {
    &__row {
        position: relative;
        width: 100%;
    }

    &__label {
        display: inline-block;
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(#1D245280, .5);
    }
}
</style>

<style lang="scss">
.multiselect {
    position: relative;
    width: 100%;
    height: 40px;
    border: 1px solid rgba(29, 36, 82, 0.1);
    border-radius: 8px;

    &--active {
        .multiselect__select {
            transform: rotate(180deg);
        }
    }

    &__select {
        position: absolute;
        right: 0;
        top: 0;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
            color: #1D2452;
            border-style: solid;
            border-width: 5px 5px 0;
            border-color: #1D2452 transparent transparent;
            content: "";
        }
    }

    &__tags {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 8px;

        input {
            padding: 0;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            font-family: 'Inter', sans-serif;
        }
    }

    &__tags-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__tag {
        position: relative;
        padding: 4px 30px 4px 8px;
        background: #F4F4FF;
        border-radius: 5px;

        span {
            white-space: nowrap;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            color: #1D2452;
        }
    }

    &__tag-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        width: 26px;
        display: flex;
        align-items: center;
        justify-content: center;


        &:after {
            margin-bottom: 3px;
            content: "\D7";
            color: rgba(#1D2452, .25);
            font-size: 22px;
        }
    }

    &__placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #a9a9a9;
    }

    &__content-wrapper {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        z-index: 10;
        right: 0;
        background: #fff;
        border: 1px solid rgba(#1D24521A, .1);
        border-radius: 8px;
        overflow: hidden;
    }

    &__content,
    &__element {
        width: 100%;
    }

    &__option {
        display: block;
        padding: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        cursor: pointer;

        &:hover,
        &--selected {
            background: #F4F4FF;
        }
    }

    &__strong {
        margin-left: 8px;
        padding: 4px 8px;
        background: #F4F4FF;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #1D2452;
    }
}
</style>