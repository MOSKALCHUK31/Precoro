<template>
    <div class="form__row">
        <input type="checkbox" :id="id" :name="name" :disabled="disabled">
        <label class="form__label" :for="id"></label>
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
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">

.form {
    &__row {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
        cursor: pointer;
        color: #1D2452;

        &::before {
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
