import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'

import apps from './routes/apps'
import dashboard from './routes/dashboard'
import uiElements from './routes/ui-elements/index'
import pages from './routes/pages'
import chartsMaps from './routes/charts-maps'
import formsTable from './routes/forms-tables'
import others from './routes/others'

import Combustible from './routes/Combustible'
import Transporte from './routes/Transporte'
import Mantenimiento from './routes/Mantenimiento'
import Neumatico from './routes/Neumatico'
import Finanza from './routes/Finanza'
import Personal from './routes/Personal'
import Login from './routes/Login'
import Inicio from './routes/Inicio'
import Asistencia from './routes/Asistencia'
import Gestion from './routes/Gestion'
import Logistica from './routes/Logistica'
import Ssoma from './routes/Ssoma'
import Gps from './routes/Gps'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    /*{ path: '/login', redirect: { name: 'autenticacion' } },*/
    { path: '/', redirect: { name: 'dashboard-ecommerce' } },
    ...Login,
    ...Inicio,
    ...apps,
    ...dashboard,
    ...pages,
    ...chartsMaps,
    ...formsTable,
    ...uiElements,
    ...others,

    ...Combustible,
    ...Transporte,
    ...Mantenimiento,
    ...Neumatico,
    ...Finanza,
    ...Personal,
    ...Logistica,
    ...Gestion,
    ...Asistencia,
    ...Ssoma,
    ...Gps,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {

  /*if(localStorage.getItem('userData') == "undefined")
  {
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      console.log("resultado y");
  }
  else
    console.log("resultado z");*/

  const isLoggedIn = isUserLoggedIn()

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })

    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
