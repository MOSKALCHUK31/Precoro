<template>
    <div class="form__row" :class="rowType">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
        }
    },
    computed: {
        rowType() {
            return 'form__row_type_' + this.type
        }
    }
}
</script>

<style scoped lang="scss">
.form {
    &__row {
        position: relative;

        + .form {
            &__row {
                margin-top: 20px;
            }
        }

        input:not([type=checkbox]):not([type=radio]) {
            width: 100%;
        }

        &_type {
            &_flex {
                display: flex;
                gap: 20px;

                .form__row + .form__row {
                    margin-top: 0;
                }
            }
        }
    }
}
</style>