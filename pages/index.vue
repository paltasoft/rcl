<template>
  <v-row>
    <v-col cols="12" sm="8" md="8">
      <Plan />
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <v-row>
        <v-col cols="12">
          <GlobalSelector />
        </v-col>
        <v-col cols="12">
          <Result />
        </v-col>
        <v-col cols="12">
          <Actions />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Actions from '~/components/Actions.vue'
export default {
  components: {
    Actions
  }
}
</script>
