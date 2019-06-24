<template>
    <form class="m-3">
        <div v-for="(value, name) in resourceRep" v-bind:key="name">
            {{name}}:
            <div v-if="Array.isArray(value) && value.length > 0">
                <select v-model="newRep[name]">
                    <option v-for="option in value" v-bind:key="option" v-bind:value="option.id"> 
                        {{ option.name }}
                    </option>
                </select>
            </div>
            <div v-else-if="value === 'file'">
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload(name)"/>
            </div>
            <div v-else>
                <input type="text" v-model="newRep[name]" :name="name">
            </div>
            <br>
        </div>
        <b-button variant="primary" v-on:click="submit">Submit</b-button> 
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
                .get(`${process.env.VUE_APP_BASEURL}${this.resourceName}/empty`, {withCredentials: true})
                .then((response) => this.resourceRep = response.data);
        },
        handleFileUpload(fieldName) {
            this.newRep[fieldName] = this.$refs.file[0].files[0];
        },
        submit() {
            let fd = new FormData();
            Object.entries(this.newRep).forEach(([key, value]) => {
                fd.append(key, value);
            });
            
            axios
                .post(`${process.env.VUE_APP_BASEURL}${this.resourceName}`, 
                    fd, 
                    {
                        withCredentials: true, 
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }) 
                .then(resp => resp.data)
                .then(isSuccess => {
                    if (isSuccess) {
                        this.$router.push('/dashboard')
                    }
                    else {
                        this.$bvToast.toast(`Oops something went wrong, file was not saved. Try again later`, {
                            title: 'Error',
                            autoHideDelay: 5000,
                            appendToast: true
                        })
                    }
                })
                .catch(err => {
                    this.$bvToast.toast(`Oops something went wrong: ${err}`, {
                        title: 'Error',
                        autoHideDelay: 5000,
                        appendToast: true
                    })
                })
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
