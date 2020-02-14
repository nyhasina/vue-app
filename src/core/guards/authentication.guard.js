export const isUserSignedGuard = (to, from, next) => {
    const token = localStorage.getItem('token');
    // Add token validation later
    if (token) {
        next();
    } else {
        next('/');
    }
};
