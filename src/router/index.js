import Vue from 'vue'
import Router from 'vue-router'
/*import Hello from '@/components/Hello'*/
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'


Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'Hello',
      component: Hello
    }*/
    /*根目录中的默认的页面*/
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})


//首先新建路由的文件，文件里是路由点击的页面
//其次是在router加载文件，配置路径
//然后在导航的页面中要router-link跳转的页面的路径
