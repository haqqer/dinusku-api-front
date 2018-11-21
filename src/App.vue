<template>
  <v-app>
    <v-content>
      <app-navbar></app-navbar>
      <div style="min-height:100vh; height:auto">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer
  }
}
</script>
