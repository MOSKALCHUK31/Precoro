<template>
    <div class="base-card">
        <slot></slot>
        <div class="base-card__icon-close">
            <icon-close-round></icon-close-round>
        </div>
    </div>
</template>

<script>
import IconCloseRound from '../icons/IconCloseRound'

export default {
    components: {
        IconCloseRound
    }
}
</script>

<style lang="scss">
.base-card {
    position: relative;
    width: 870px;
    margin: 40px auto;
    box-shadow: 0 8px 16px rgba(54, 62, 113, 0.24);
    border-radius: 16px;
    background: #fff;

    &__icon-close {
        position: absolute;
        top: 24px;
        right: 24px;
    }
}
</style>