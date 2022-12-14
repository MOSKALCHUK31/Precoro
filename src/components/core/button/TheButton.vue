<template>
    <router-link v-if="link" :to="to" :class="className">
        <slot></slot>
    </router-link>
    <button v-else :class="className">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: false,
            default: 'medium'
        },
        color: {
            type: String,
            required: false,
            default: 'blue'
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false
        }
    },
    computed: {
        className() {
            return `button button_size_${this.size} button_color_${this.color}`
        }
    }
}
</script>

<style scoped lang="scss">
button,
input[type=submit] {
    outline: none;
}

.button,
button {
    cursor: pointer;
}

button.button,
input.button {
    line-height: normal;
}

.button {
    display: flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0;
    text-align: center;
    border: 0;
    border-radius: 20px;
    outline: 0;

    &,
    &:hover {
        text-decoration: none;
    }

    &:disabled,
    &:disabled:hover {

    }

    &_size {
        &_small {}

        &_medium {
            height: 40px;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
        }

        &_large {}
    }

    &_color {
        &_blue {
            color: #fff;
            background: #1D2452;
        }
    }
}



</style>

