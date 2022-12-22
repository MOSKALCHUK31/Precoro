<template>
    <div class="form__row">
        <label class="form__label" :for="id">{{ label }}</label>
        <select :id="id" :name="name" :disabled="disabled">
            <option v-for="option in options" value="option">{{ option }}</option>
        </select>
        <icon-rectangle-down></icon-rectangle-down>
    </div>
</template>

<script>
import IconRectangleDown from '../../icons/IconRectangleDown'

export default {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    components: {
        IconRectangleDown
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

select {
    appearance: none;
    padding-right: 8px;
    padding-left: 8px;
    width: 100%;
    height: 40px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #1D2452;
    background: #fff;
    border: 1px solid rgba(#1D24521A, .1);
    border-radius: 8px;
    outline: none;
    transition: .2s;

    &[type=number] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            appearance: none;
            margin: 0;
        }
    }

    & + svg {
        position: absolute;
        right: 0;
    }

    &[disabled] {
        background-color: #F4F4FF;
    }
}
</style>