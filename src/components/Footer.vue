<template>
  <v-footer
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary darken-1 white--text">
        <strong class="subheading">Just Enjoy this app</strong>

        <v-spacer></v-spacer>
        
      </v-card-title>

      <v-card-actions class="primary white--text justify-center">
        &copy;2018 — <strong>haqqer</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'facebook',
        'instagram',
        'github',
        'twitter'
      ]
    })
  }
</script>