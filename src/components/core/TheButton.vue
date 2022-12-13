<template>
    <button :class="className">
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
    font-family: 'Inter', sans-serif;
    position: relative;
    display: inline-block;
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

