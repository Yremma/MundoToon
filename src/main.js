import Vue              from 'vue'
import Router           from 'vue-router'
import ElementUI        from 'element-ui'
import locale           from 'element-ui/lib/locale/lang/es'
import VueCookies       from 'vue-cookies'


import 'element-theme-default';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'


import App              from './App.vue'
import Home             from '@/components/Home'
import Login            from '@/components/Login'
import Registro         from '@/components/Registro'
import Recuperar        from '@/components/Pass_Recuperar'
import Subir            from '@/components/Subir'
import Condiciones      from '@/components/Footer_Condiciones'
import Contacto         from '@/components/Footer_Contacto'
import Mision           from '@/components/Footer_Mision'
import Privacidad       from '@/components/Footer_Privacidad'
import Reglas           from '@/components/Footer_Reglas'
import Tutoriales       from '@/components/Footer_Tutoriales'



Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueCookies)
Vue.use(Router)



const router = new Router({
    mode: 'history',
    routes: [
        {   path: '/',              name: 'home',           component: Home,
        },
        {   path: '/condiciones',   name: 'condiciones',    component: Condiciones,
        },
        {   path: '/contacto',      name: 'contacto',       component: Contacto,
        },
        {   path: '/login',         name: 'login',          component: Login,
        },
        {   path: '/mision',        name: 'mision',         component: Mision,     
        },
        {   path: '/privacidad',    name: 'privacidad',     component: Privacidad,
        },
        {   path: '/recuperar',     name: 'recuperar',      component: Recuperar,
        },
        {   path: '/registro',      name: 'registro',       component: Registro,
        },
        {   path: '/reglas',        name: 'reglas',         component: Reglas,
        },
        {   path: '/subir',         name: 'subir',          component: Subir,
        },
        {   path: '/tutoriales',    name: 'tutoriales',     component: Tutoriales,
        },
        {   path: '',               redirect: '/',
        },
        {   path: '*',              redirect: '/',
        }
  ]
})



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
