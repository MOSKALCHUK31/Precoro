<template>
    <div class="notification">
        <div class="notification__icon">
            <icon-info></icon-info>
        </div>
        <div class="notification__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import IconInfo from '../icons/IconInfo';

export default {
    components: {
        IconInfo
    }
}
</script>

<style lang="scss">
.notification {
    width: 640px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    background: rgba(#F4F4FF80, .5);
    border-radius: 8px;

    &__icon {
        width: 24px;
        height: 24px;
    }

    &__content {
        &_color {
            &_blue {
                color: #415ADA;
                text-decoration: underline;
            }
        }
    }
}
</style>