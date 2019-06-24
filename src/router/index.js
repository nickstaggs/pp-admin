import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import ResourceCards from '../components/ResourceCards.vue'
// const ResourceDetails = () => import('../components/ResourceDetails.vue')

export default 
[
    { path: '/', component: LoginPage, name:'LoginPage' },
    { path: '/dashboard', component: DashboardPage,
        children: [
            {
                path: '',
                component: ResourceCards,
            },
            {
                path: ':resource/add',
                component: () => import('../components/AddEditResource.vue'),
                props: (route) => ({ resourceName: route.params.resource})
            },
            {
                path: ':resource/:id',
                component: () => import('../components/ResourceDetails.vue'),
                props: (route) => ({ resource: route.params.resource,  id: route.params.id})
            }
        ]
    }
]
