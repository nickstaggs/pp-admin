<template>
    <ul style="list-style:none;">
        <li v-for="(value, name) in this.uniqueResource" v-bind:key="name">
            <p>{{name}} : {{truncate(value)}}</p>
        </li>
    </ul>
</template>
<script>
import axios from 'axios'

export default {
    name: 'ResourceDetails',
    props: ['resource', 'id'],
    mounted: function() {
        this.getResource();
    },
    methods: {
        truncate(str) {
            var maxLength = 30
            if (typeof(str) === 'string' && str.length > maxLength) {
                return str.substring(0, maxLength) + '...'
            }

            return str;
        },
        getResource() {

            if (this.resource !== undefined && this.id !== undefined) {
                axios
                .get(`${process.env.VUE_APP_BASEURL}${this.resource}?id=${this.id}` )
                .then((response) => this.uniqueResource = response.data);
            }   
        },
    },
    data(){
        return {
            uniqueResource: {}
        }
    },
}
</script>
