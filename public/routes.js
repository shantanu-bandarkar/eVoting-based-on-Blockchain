const routes = require('next-routes')();

routes
    .add('/homepage','/homepage')
    .add('/company_login','/company_login')
    .add('/election/:address/company_dashboard','/election/company_dashboard')
module.exports = routes;