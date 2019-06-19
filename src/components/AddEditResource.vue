<template>
    <form class="m-3">
        <div v-for="(value, name) in resourceRep" v-bind:key="name">
            {{name}}:
            <div v-if="Array.isArray(value)">
                    <select v-model="newRep[name]">
                        <option v-for="option in value" v-bind:key="option" v-bind:value="option.id"> 
                            {{ option.name }}
                        </option>
                    </select>
                <br>
            </div>
            <div v-else>
                    <input type="text" v-model="newRep[name]" :name="name">
                <br>
            </div>
        </div>
    <!-- First name:
    <br>
    <input type="text" name="firstname" value="Mickey">
    <br>Last name:
    <br>
    <input type="text" name="lastname" value="Mouse">
    <br>
    <br>
    <input type="submit" value="Submit"> -->
    </form>
</template>
<script>
import axios from 'axios'

export default {
    name: 'AddEditResource',
    props: ['resourceName', 'resource'],
    methods: {
        getEmpty() {
            axios
                .get(`${process.env.VUE_APP_BASEURL}${this.resourceName}/empty`)
                .then((response) => this.resourceRep = response.data);
        }
    },
    data() {
        return {
            resourceRep: this.resource,
            newRep: {}
        }
    },
    beforeMount: function() {
        if (this.resourceRep === undefined || this.resourceRep === null) {
            this.getEmpty();
        }
    }
};
</script>
