<template>
    <div>
        <b-tabs content-class="mt-3" fill>
            <b-tab :title="first" active>
                <URITabDisplay :resourceName="first"></URITabDisplay>
            </b-tab>
            <b-tab :title="second">
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
	}
};
</script>
