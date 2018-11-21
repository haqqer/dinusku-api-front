<template>
  <div>
  <v-toolbar color="primary">   
    <v-toolbar-side-icon  class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title  class="white--text">DinusKu</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat  class="white--text" to="/">Home</v-btn>
        <v-btn flat  class="white--text" to="/form">Jadwal</v-btn>
        <v-btn flat  class="white--text" to="/about">About</v-btn>
    </v-toolbar-items>    
  </v-toolbar>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      height="100vh"
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile>
          <h3>DinusKU</h3>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to=item.url style="text-decoration:none; color:inherit">
                {{ item.title }}
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard', url:'/' },
          { title: 'Form', icon: 'question_answer', url:'/form' },
          { title: 'About', icon: 'question_answer', url:'/about' }
        ]
      }
    }
  }
</script>

