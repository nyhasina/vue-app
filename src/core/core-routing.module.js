import VueRouter from 'vue-router';
import { authenticationRoutes } from '../authentication/authentication-routing.module';
import AuthenticationRoot from './containers/authentication-root';

const coreRoutes = [
    {
        path: '/authentication',
        component: AuthenticationRoot,
        children: [
            ...authenticationRoutes
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
