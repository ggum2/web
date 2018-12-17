import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts
import Base from '@/layout/Base'
import Login from '@/components/authentication/Login'
import Register from '@/components/authentication/Register'

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
    base: '/',
    mode: 'history',
    routes: [{
        path: '/',
        component: Base,
        children: [
            {
                path: '',
                component: () => import('@/components/home/Home')
            },
            {
                path: 'album',
                component: () => import('@/components/album/Album')
            },
            {
                path: 'diary',
                component: () => import('@/components/diary/Diary')
            },
            {
                path: 'calendar',
                component: () => import('@/components/calendar/Calendar')
            },
            {
                path: 'todo',
                component: () => import('@/components/todo/Todo')
            },

            // Administrator
            {
                path: 'notice',
                component: () => import('@/components/notice/Notice')
            },
            {
                path: 'user',
                component: () => import('@/components/user/User')
            }
        ]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    }]
});

router.afterEach(() => {
// Remove initial splash screen
    const splashScreen = document.querySelector('.app-splash-screen');
    if (splashScreen) {
        splashScreen.style.opacity = 0;
        setTimeout(() => splashScreen && splashScreen.parentNode.removeChild(splashScreen), 300)
    }

// On small screens collapse sidenav
    if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
        setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
    }

// Scroll to top of the page
    globals().scrollTop(0, 0)
});

router.beforeEach((to, from, next) => {
// Set loading state
    document.body.classList.add('app-loading');

// Add tiny timeout to finish page transition
    setTimeout(() => next(), 10)
});

export default router;