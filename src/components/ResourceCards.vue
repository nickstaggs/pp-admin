<template>
    <div class="row m-3">
        <AddResourceCard :resourceName="resourceName"></AddResourceCard>
        <DashboardURICard v-for="uniqueResource in uniqueResources" 
            :uniqueResource="uniqueResource" 
            :resourceName="resourceName" 
            :createDetailsUrl="createDetailsUrl"
            v-bind:key="uniqueResource.title||uniqueResource.name">
        </DashboardURICard>
    </div>
</template>

<script>
import DashboardURICard from './DashboardURICard.vue'
import AddResourceCard from './AddResourceCard.vue'
import axios from 'axios'

export default {
    props: ['resources', 'resourceName'],
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
                .get(process.env.VUE_APP_BASEURL + this.resourceName, {withCredentials: true})
                .then((response) => this.uniqueResources = response.data);
        },
        createDetailsUrl(resource, id) {
            return `./${resource}/${id}`;
        }
    }
}
</script>