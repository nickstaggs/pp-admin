<template>
    <router-view :resourceName='resourceName' >
    </router-view>
</template>

<script>

export default {
    props: ['resourceName'],
}
</script>
