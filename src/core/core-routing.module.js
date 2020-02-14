import VueRouter from 'vue-router';
import { authenticationRoutes } from '../authentication/authentication-routing.module';
import { homeRoutes } from '../home/home-routing.module';
import AuthenticationRoot from './containers/authentication-root.component';
import HomeRoot from './containers/home-root.component';

const coreRoutes = [
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

export const coreRoutingModule = new VueRouter({
    routes: coreRoutes
});
