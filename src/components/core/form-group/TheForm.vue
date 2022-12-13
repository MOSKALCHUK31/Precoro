<template>
    <form :action="action" :method="method">
        <slot></slot>
    </form>
</template>

<script>
export default {
    props: {
        action: {
            type: String,
            required: false
        },
        method: {
            type: String,
            required: false
        }
    }
}
</script>