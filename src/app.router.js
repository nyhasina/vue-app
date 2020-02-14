import VueRouter from 'vue-router';
import { authenticationRoutes } from './authentication/authentication-routing.module';
import { homeRoutes } from './home/home-routing.module';
import AuthenticationRoot from './core/containers/authentication-root/authentication-root.component';
import HomeRoot from './core/containers/home-root/home-root.component';

const appRoutes = [
    {
        path: '/authentication',
        component: AuthenticationRoot,
        children: [
            ...authenticationRoutes
        ]
    },
    {
        path: '/home',
        component: HomeRoot,
        children: [
            ...homeRoutes
        ]
    },
    {
        path: '',
        redirect: 'authentication'
    }
];

export const router = new VueRouter({
    routes: appRoutes
});
