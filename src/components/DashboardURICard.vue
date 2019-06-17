<template>
    <b-card class="col-12 col-md-4 col-xl-3 m-3" >
        <ul style="list-style:none;">
            <li v-for="(value, name) in uniqueResource" v-bind:key="name">
                <p>{{name}} : {{truncate(value)}}</p>
            </li>
        </ul>
    </b-card>
</template>

<script>
export default {
    name: 'DashboardURICard',
    props: ['uniqueResource'],
    methods: {
        truncate(str) {
            var maxLength = 30
            if (typeof(str) === 'string' && str.length > maxLength) {
                return str.substring(0, maxLength) + '...'
            }

            return str;
        }
    },
}
</script>