const routes = {
    home : '/',
    collections : '/collections/:name',
    http : {
        notFound : '/*',
        internalError: '/error/:code'
    }
}

export default routes;
