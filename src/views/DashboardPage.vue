<template>
    <div>
        <b-tabs content-class="mt-3" fill>
            <!-- <b-tab :title="first" v-on:click='returnToMain()' active>
                <URITabDisplay :resourceName="first"></URITabDisplay>
            </b-tab>
            <b-tab :title="second" v-on:click='returnToMain()'>
                <URITabDisplay :resourceName="second"></URITabDisplay>
            </b-tab> -->
            <b-tab v-for="tab in this.tabs" v-bind:key="tab.name" :title="tab.name" v-on:click='returnToMain()'>
                <URITabDisplay :resourceName="tab.name"></URITabDisplay>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import URITabDisplay from '../components/URITabDisplay'

export default {
	name: 'DashboardPage',
	components: {
		URITabDisplay
	},
	data() {
		return {
            tabs: [
                { name: "files" },
                { name: "blogposts" },
                { name: "projects" },
                { name: "content" }
            ]
		}
    },
    methods: {
        returnToMain() {
            let dashboardRegex = new RegExp("^/dashboard[/]?$")
            if (!dashboardRegex.test(this.$route.path)) {
                this.$router.go(-1);
            }
        }
    }
};
</script>
