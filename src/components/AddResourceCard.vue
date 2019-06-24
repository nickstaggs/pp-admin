<template>
    <b-card v-on:click="goToAddPage()" append class="col-12 col-md-4 col-xl-3 m-3" style="cursor: pointer;">
        <v-icon name="plus" size="lg" style="min-height: 100%; min-width: 100%;"/>
    </b-card>
</template>
<script>
export default {
    name: 'AddResourceCard',
    props: ['resourceName'],
    data() {
        return {
            addUrl: `dashboard/${this.resourceName}/add`
        }
    },
    methods: {
        goToAddPage() {
            this.$router.push(this.addUrl);
        }
    }
}
</script>
