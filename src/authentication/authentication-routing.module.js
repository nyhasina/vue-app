import SignInRoot from './containers/sign-in-root.component';
import SignUpRoot from './containers/sign-up-root.component';

export const authenticationRoutes = [
    {
        path: 'sign-in',
        component: SignInRoot
    },
    {
        path: 'sign-up',
        component: SignUpRoot
    },
    {
        path: '',
        redirect: 'sign-in'
    }
];