import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

export default 
[
    { path: '/', component: LoginPage, name:'LoginPage' },
    { path: '/dashboard', component: DashboardPage, name:'DashboardPage'}
]
