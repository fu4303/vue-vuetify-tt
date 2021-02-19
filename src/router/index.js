import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import NotFound from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page - Landing Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of ploygon.'
        },
        {
          property: 'og:description',
          content: 'The home page of ploygon web app.'
        }
      ]
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Signup Page',
      metaTags: [
        {
          name: 'description',
          content: 'The signup page of ploygon.'
        },
        {
          property: 'og:description',
          content: 'The signup page of ploygon web app.'
        }
      ]
    }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not found Page'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map(el => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
