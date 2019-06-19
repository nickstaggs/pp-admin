<template>
    <div>
        <b-tabs content-class="mt-3" fill>
            <b-tab :title="first" v-on:click='returnToMain()' active>
                <URITabDisplay :resourceName="first"></URITabDisplay>
            </b-tab>
            <b-tab :title="second" v-on:click='returnToMain()'>
                <URITabDisplay :resourceName="second"></URITabDisplay>
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
			first: "files",
			second: "blogposts",
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
