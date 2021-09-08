import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import StudioNavBar from '@/components/StudioNavBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Auth/SignIn.vue')
    }
  },
  {
    path: '/otp',
    name: 'otp',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Auth/OTP.vue')
    }
  },
  {
    path: '/payment',
    name: 'payment',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Payment/Payment.vue')
    }
  },
  {
    path: '/resume',
    name: 'resume',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Payment/Resume.vue')
    }
  },
  {
    path: '/product',
    name: 'product',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Product/ProductPreview.vue')
    }
  },
  {
    path: '/payerror',
    name: 'payerror',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Payment/PayError.vue')
    }
  },
  {
    path: '/profileBuyer',
    name: 'profileBuyer',
    components: {
      NavBar,
      default: () => import('../views/DashboardBuyer/Profile.vue')
    }
  },
  {
    path: '/deliveryBuyer',
    name: 'deliveryBuyer',
    components: {
      NavBar,
      default: () => import('../views/DashboardBuyer/Delivery.vue')
    }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    components: {
      NavBar,
      default: () => import('../views/DashboardBuyer/Withdraw.vue')
    }
  },
  {
    path: '/registercard',
    name: 'registercard',
    components: {
      NavBar,
      default: () => import('../views/DashboardBuyer/RegisterCard.vue')
    }
  },
  {
    path: '/mysales',
    name: 'mysales',
    components: {
      NavBar,
      default: () => import('../views/DashboardSeller/MySales.vue')
    }
  },
  {
    path: '/newproductorservice',
    name: 'newproductorservice',
    components: {
      NavBar,
      default: () => import('../views/DashboardSeller/NewProductOrService.vue')
    }
  },
  {
    path: '/myproducts',
    name: 'myproducts',
    components: {
      NavBar,
      default: () => import('../views/DashboardSeller/MyProducts.vue')
    }
  },
  {
    path: '/productedit',
    name: 'productedit',
    components: {
      NavBar,
      default: () => import('../views/DashboardSeller/ProductEdit.vue')
    }
  },
  {
    path: '/prodnotfound',
    name: 'prodnotfound',
    components: {
      NavBar,
      default: () => import('../views/DashboardSeller/ProdNotFound.vue')
    }
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Payment/PaySuccess.vue')
    }
  },
  {
    path: '/delivery',
    name: 'delivery',
    components: {
      NavBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Auth/Delivery.vue')
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../views/Auth/SignUp.vue')
  },
  {
    path: '/trending',
    name: 'Trending',
    components: {
      NavBar,
      default: () =>
        import(/* webpackChunkName: "trending" */ '../views/Trending.vue')
    }
  },
  {
    path: '/studio',
    components: {
      StudioNavBar,
      default: () =>
        import(/* webpackChunkName: "dashboard" */ '../views/Studio/Index.vue')
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../views/Studio/Dashboard.vue'
          )
      },
      {
        path: 'videos',
        name: 'Video',
        component: () =>
          import(/* webpackChunkName: "video" */ '../views/Studio/Video.vue')
      },
      {
        path: 'details/:id',
        name: 'Detail',
        component: () =>
          import(/* webpackChunkName: "video" */ '../views/Studio/Details.vue')
      }
    ]
  },
  {
    path: '/channels/:id',
    components: {
      NavBar,
      default: () =>
        import(/* webpackChunkName: "dashboard" */ '../views/Channel/Index.vue')
    },
    children: [
      {
        path: '/',
        name: 'ChannelHome',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../views/Channel/Home.vue'
          )
      }
    ]
  },
  {
    path: '/watch/:id',
    name: 'Watch',
    components: {
      NavBar,
      default: () =>
        import(/* webpackChunkName: "video" */ '../views/Watch.vue')
    }
  },
  {
    path: '/history',
    name: 'History',
    components: {
      NavBar,
      default: () =>
        import(/* webpackChunkName: "video" */ '../views/History.vue')
    }
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      NavBar,
      default: () =>
        import(/* webpackChunkName: "video" */ '../views/Search.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
