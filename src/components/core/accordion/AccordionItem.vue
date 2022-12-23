<template>
    <li class="accordion__item is-active" :class="activeClass">
        <div class="accordion-tile">
            <div class="accordion-tile__heading" @click="handleToggle">
                <div class="accordion-tile__title">{{ title }}</div>
                <div v-if="count >= 0" class="accordion-tile__counter">
                    {{ countValue }} selected
                    <icon-chevron-down></icon-chevron-down>
                </div>
                <div v-else class="accordion-tile__label">
                    {{ label }}
                    <icon-chevron-down></icon-chevron-down>
                </div>
            </div>
            <div class="accordion-tile__content">
                <slot>
                    <div>This item is empty!</div>
                </slot>
            </div>
        </div>
    </li>
</template>

<script>
import IconChevronDown from '../../icons/IconChevronDown'

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: false
        },
        label: {
            type: String,
            required: false
        }
    },
    components: {
        IconChevronDown
    },
    computed: {
        activeClass() {
            if (this.active) return 'is-active'
        },
        countValue() {
            if (this.count === 0) return 'Not'
            else return this.count

        }
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        handleToggle() {
            if (this.active) this.active = false
            else this.active = true
        }
    }
}
</script>

<style scoped lang="scss">
.accordion {
    &__item {
        &:not(:last-of-type) {
            border-bottom: 1px solid #DDDEE5;
        }

        &.is-active {
            .accordion-tile {
                &__counter,
                &__label {
                    svg {
                        transform: rotate(180deg);
                    }
                }

                &__content {
                    display: block;
                }
            }
        }
    }
}

.accordion-tile {
    &__heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
    }

    &__title {
        font-size: 18px;
        font-weight: 600;
        line-height: 16px;
        color: #1D2452;
    }

    &__counter,
    &__label {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(#1D2452, .4);

        svg {
            margin-left: 8px;
        }
    }

    &__content {
        display: none;
        padding-bottom: 24px;
    }
}
</style>