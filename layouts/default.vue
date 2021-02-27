<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>
        <img src="/logo.png" style="height:60px;width:auto" />
      </v-toolbar-title>
      <v-spacer />
      <v-btn color="warning" @click="reload">
        RESET
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
    </v-navigation-drawer>
    <v-footer
      :absolute="true"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      right: true,
      rightDrawer: false,
      title: 'RCL - Planner'
    }
  },
  methods: {
    reload () {
      location.href = "/"
    }
  }
}
</script>
