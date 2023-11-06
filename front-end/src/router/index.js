import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import Message from '@/components/Message.vue'
import Messages from '@/components/Messages.vue'
import NewMessages from '@/components/NewMessages.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/newmessage',
    name: 'newmessage',
    component: NewMessages
  },
  {
    path: '/message/:id',
    name: 'message',
    component: Message
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
