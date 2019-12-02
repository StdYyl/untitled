import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homes',
      component: ()=> import('@/page/homes'),
      meta:{index:0}
    },
    {
      path: '/apply/:id',
      name: 'apply',
      meta:{index:-1},
      component: ()=> import('@/page/apply'),
    },
    {
      path:'/apply/fillInMes/:id',
      component: ()=> import('@/page/reportMessage/reportMes'),
    },
    {
      path: '/land',
      name: 'land',
      component: ()=> import('@/page/register/land')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('@/page/register/register')
    },
    {
      path: '/detail',
      name: 'detail',
      component: ()=> import('@/page/mesDetail'),
      meta:{list:['英大概况', '办公地址', '关于我们'], index:1}
    },
    {
      path: '/studyOnline',
      name: 'studyOnline',
      component: ()=> import('@/page/mesDetail'),
      meta:{list:['成人教育', '远程教育', '职业教育'], index:2}
    },
    {
      path: '/trainingTest',
      name: 'trainingTest',
      component: ()=> import('@/page/mesDetail'),
      meta:{list:['培训考试', '自学考试'], index:3}
    },
    {
      path: '/certificate',
      component: ()=> import('@/page/certificate'),
      children:[
        {
          path: '',
          component: ()=> import('@/components/certificate/index'),
        },
        {
          path: 'find/:which',
          component: ()=> import('@/components/certificate/find'),
        },
        {
          path: 'search',
          component: ()=> import('@/components/certificate/certificateResult'),
        },
      ]
    },
    {
      path: '/userMine',
      name: 'userMine',
      component: () => import('@/page/User')
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: () => import('@/page/news/newsDetail')
    },
    {
      path: '/newList/:id',
      name: 'newList',
      component: () => import('@/page/news/newsList')
    }
  ]
})
