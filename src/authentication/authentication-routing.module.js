import SignInRoot from './containers/sign-in-root';
import SignUpRoot from './containers/sign-up-root';

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