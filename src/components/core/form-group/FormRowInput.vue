<template>
    <div class="form__row">
        <label class="form__label" :for="id">{{ label }}</label>
        <input :id="id" :type="type" :name="inputName" :placeholder="placeholder" :disabled="isDisabled">
    </div>
</template>

<script>
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
        type: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        isDisabled() {
            return this.disabled
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

input {
    padding-right: 8px;
    padding-left: 8px;
    width: 100%;
    height: 40px;
    appearance: none;
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

    &:disabled {
        background: #F4F4FF;
    }
}
</style>