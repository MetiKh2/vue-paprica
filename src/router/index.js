import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import FriendsView from '../views/FriendsView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import ProfileView from '../views/ProfileView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue' 

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component:ListView
    },
    {
      path: '/friends',
      name: 'list',
      component:FriendsView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component:FavoritesView
    },
    {
      path: '/profile',
      name: 'profile',
      component:ProfileView
    },
    {
      path: '/categories',
      name: 'categories',
      component:CategoriesView
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    },
    {
      path: '/register',
      name: 'register',
      component:RegisterView
    },    
  ]
})

export default router
