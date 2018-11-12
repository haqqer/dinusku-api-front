<template>
  <v-toolbar color="primary">
    <v-toolbar-side-icon  class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title  class="white--text">DinusKu</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat  class="white--text" to="/">Home</v-btn>
        <v-btn flat  class="white--text" to="/form">Jadwal</v-btn>
        <v-btn flat  class="white--text" to="/about">About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>