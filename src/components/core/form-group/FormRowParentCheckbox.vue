<template>
    <div class="dropdown" :class="hasActiveClass">
        <div class="dropdown__heading" @click="handleToggleDropdown">
            <input type="checkbox" :id="parentId" :name="parentName" :disabled="disabled" :checked="checked" @change="handleToggleCheckbox" @click="event => event.stopPropagation()">
            <label class="dropdown__label" :for="parentId" @click="event => event.stopPropagation()">{{ parentLabel }}</label>
            <icon-chevron-down :color="active ? '#415ADA' : '#1D2452'"></icon-chevron-down>
        </div>
        <div class="dropdown__content">
            <div v-if="!childElements" class="dropdown__slot">
                <slot>
                    default slot
                </slot>
            </div>
            <ul v-else class="dropdown__list">
                <li class="dropdown__item" v-for="child in childElements" :key="child.id">
                    <input type="checkbox" :id="child.id" :name="child.name" :disabled="disabled" :checked="checked" @change="handleToggleCheckbox" @click="event => event.stopPropagation()">
                    <label class="dropdown__label" :for="child.id">{{ child.label }}</label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import IconChevronDown from '../../icons/IconChevronDown'

export default {
    props: {
        parentId: {
            type: String,
            required: true,
        },
        parentName: {
            type: String,
            required: true
        },
        parentLabel: {
            type: String,
            required: true
        },
        childElements: {
            type: Array,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        checked: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    components: {
        IconChevronDown
    },
    computed: {
        hasActiveClass() {
            if (this.active) return 'is-active'
        }
    },
    data() {
        return {
            active: false,
            isSelected: false
        }
    },
    methods: {
        handleToggleDropdown() {
            this.active = !this.active
        },
        handleToggleCheckbox(event) {
            event.stopPropagation()
            const target = event.currentTarget

            target.toggleAttribute('data-checked')
            target.hasAttribute('data-checked')
                ? this.$emit('changeEvent', true)
                : this.$emit('changeEvent', false)
        }
    }
}
</script>

<style scoped lang="scss">

.dropdown {

    &.is-active {
        & > .dropdown__heading {
            svg {
                transform: rotate(180deg);
            }
        }

        & > .dropdown__content {
            display: block;
        }
    }


    &__heading {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;

        &::before {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
            width: calc(100% - 26px);
            height: 1px;
            background: rgba(#1D24521A, .1);
        }
    }

    &__label {
        //padding: 8px 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
    }

    &__content {
        display: none;
        margin-left: 8px;
    }

    &__slot {}

    //&__list {}

    &__item {
        position: relative;
        padding: 8px 0;

        &:before {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
            width: calc(100% - 26px);
            height: 1px;
            background: rgba(#1D24521A, .1);
        }

        &:not(:last-of-type) {
            //margin-bottom: 8px;
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
