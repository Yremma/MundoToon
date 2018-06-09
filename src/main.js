import Vue              from 'vue'
import Router           from 'vue-router'
import ElementUI        from 'element-ui'
import locale           from 'element-ui/lib/locale/lang/es'

import 'element-theme-default';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'


import App              from './App.vue'
import Home             from '@/components/Home'
import Contacto         from '@/components/Footer_Contacto'
import Mision           from '@/components/Footer_Mision'
import Reglas           from '@/components/Footer_Reglas'



Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(Router)



const router = new Router({
    mode: 'history',
    routes: [
        {   path: '/',          name: 'home',       component: Home,
        },
        {   path: '/contacto',  name: 'contacto',   component: Contacto,
        },
        {   path: '/mision',    name: 'mision',     component: Mision,     
        },
        {   path: '/reglas',    name: 'reglas',     component: Reglas,
        },
        {   path: '',           redirect: '/',
        },
        {   path: '*',          redirect: '/',
        }
  ]
})



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
