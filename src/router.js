import { createRouter, createWebHistory } from 'vue-router'

import MainInfo from './components/pages/MainInfo'
import AvailableLocations from './components/pages/AvailableLocations'
import AvailableDocs from './components/pages/AvailableDocs'
import TheRoles from './components/pages/TheRoles'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: MainInfo },
        { path: '/locations', component: AvailableLocations },
        { path: '/docs', component: AvailableDocs },
        { path: '/roles', component: TheRoles }
    ]
})

export default router