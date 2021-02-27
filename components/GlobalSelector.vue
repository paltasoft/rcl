<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-card-title>
        Tipologia
    </v-card-title>
    <v-card-text> 
        <v-radio-group
            v-model="computeType"
            mandatory
            row
        >
            <v-radio
                label="H50"
                value="h50"
            ></v-radio>
            <v-radio
                label="H75"
                value="h75"
            ></v-radio>
            <v-radio
                label="H100"
                value="h100"
            ></v-radio>
            <v-radio
                label="Skyline"
                value="skyline"
            ></v-radio>
        </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        computeType: {
            get() {
                return this.$store.state.computeType
            },
            /* We add a setter */
            set(value) {
                this.$store.commit("computeType", value)
            }
        }
    }
}
</script>

