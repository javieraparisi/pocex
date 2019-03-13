import Vue from 'vue'
import Router from 'vue-router'
//import Portfolio from '@/components/portfolio/portfolio'
import spinner from '../libs/spinner'

let importWithSpinner = (componenteImp)=> {
    let idSpinner = spinner.show();
    var promiseComp = componenteImp.then((comp) => {
      spinner.hide(idSpinner);
      return comp;
    });
    return promiseComp;
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => importWithSpinner(import(/* webpackChunkName: "ChunkPortfolio" */ '../components/portfolio/portfolio.vue'))
    }
  ]
});