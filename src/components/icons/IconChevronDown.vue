<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.06114 8.6254C7.69021 8.27453 7.10979 8.27452 6.73886 8.6254C6.33761 9.00497 6.33761 9.64368 6.73886 10.0232L11.4835 14.5114C11.7733 14.7855 12.2267 14.7855 12.5165 14.5114L17.2611 10.0232C17.6624 9.64368 17.6624 9.00497 17.2611 8.6254C16.8902 8.27452 16.3098 8.27452 15.9389 8.6254L12 12.3514L8.06114 8.6254Z" :fill="color"/>
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            required: false,
            default: '#C6C8D4'
        }
    }
}
</script>