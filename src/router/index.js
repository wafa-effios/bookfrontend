import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import MessageComponent from "@/components/MessageComponent.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addbook',
    name: 'add',
    component: AboutView
  },
  {
    path: '/editbook/:id',
    name: 'edit',
    component: AboutView
  },
  {
    path: '/msg',
    name: 'message',
    component: MessageComponent
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
