<template>
  <v-app>
    <v-toolbar app dark color="black">
      <router-link v-if="$store.state.token" to="/messages">
        <v-btn flat color="white">Messages</v-btn>
      </router-link>
      <router-link v-if="$store.state.token" to="/newmessage">
        <v-btn flat color="white">New message</v-btn>
      </router-link>
      <v-spacer/>
      <router-link v-if="!$store.state.token" to="/register">
        <v-btn flat color="white">Register</v-btn>
      </router-link>
      <router-link v-if="!$store.state.token" to="/">
        <v-btn flat color="white">Login</v-btn>
      </router-link>
      <v-btn v-if="$store.state.token" flat color="white" @click="logout">Logout</v-btn>
    </v-toolbar>
    <br>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('initialize')
  },
  methods : {
    logout() {
      this.$store.commit('logout'),
      this.$router.push('/')
    }
  }
}
</script>
