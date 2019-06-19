<template>
    <b-card class="col-12 col-md-4 col-xl-3 m-3" :title="uniqueResource.title||uniqueResource.name">
        <b-button :to="createDetailsUrl(resourceName, uniqueResource._id)" append variant="primary">Details</b-button>
    </b-card>
</template>

<script>
export default {
    name: 'DashboardURICard',
    props: ['uniqueResource', 'resourceName', 'createDetailsUrl', 'getResource'],
}
</script>