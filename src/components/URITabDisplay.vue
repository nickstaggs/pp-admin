<template>
    <div>
        <AddResourceCard></AddResourceCard>
        <DashboardURICard v-for="uniqueResource in uniqueResources" :uniqueResource="uniqueResource" v-bind:key="uniqueResource.title||uniqueResource.name"></DashboardURICard>
    </div>
</template>

<script>
import DashboardURICard from './DashboardURICard.vue'
import AddResourceCard from './AddResourceCard.vue'
import axios from 'axios'

export default {
    props: ['resourceName'],
    data() {
        return {
            uniqueResources: {}
        }
    },
    mounted: function() {
        this.getResources();
    },
    components: {
        DashboardURICard,
        AddResourceCard
    },
    methods: {
        getResources() {
            axios
                .get(process.env.VUE_APP_BASEURL + this.resourceName)
                .then((response) => this.uniqueResources = response.data);
        }
    }
}
</script>
