<template>
    <div class="form__row">
        <input type="checkbox" :id="id" :name="name" :disabled="disabled" @change="handleChange">
        <label class="form__label" :for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            isChecked: false
        }
    },
    methods: {
        handleChange() {
            this.isChecked = !this.isChecked

            this.$emit('changeEvent', this.isChecked)
        }
    }
}
</script>

<style scoped lang="scss">

.form {
    &__row {
        width: 100%;

        + .form__row {
            margin-top: 16px;
        }
    }
}
input[type=checkbox] {
    appearance: none;
    position: absolute;
    height: 0;
    border: 0;

    + label {
        position: relative;
        display: inline-block;
        padding-left: 26px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #1D2452;

        &::before {
            position: absolute;
            top: 2px;
            left: 0;
            display: block;
            width: 18px;
            height: 18px;
            content: '';
            background-color: #fff;
            border: 1px solid rgba(#1D24521A, .1);
            border-radius: 4px;
        }
    }

    &:checked {
        + label {
            &::before {
                background-image: url('../../../assets/builder/checked.svg');
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: 10px 8px;
                background-color: #415ADA;
                border-color: #415ADA;
            }
        }
    }

    &:disabled {
        + label {
            &::before {
                background-color: #F4F4FF;
                border-color: #F4F4FF;
            }
        }
    }
}

</style>
