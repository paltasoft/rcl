<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-card-title>
        Tipologia
    </v-card-title>
    <v-card-text> 
        <v-row>
            <v-col cols=12>
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
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
            </v-col>
            <v-col  v-if="computeType === 'skyline'" cols="8">
                <v-btn-toggle
                    v-model="skylineValue"
                    mandatory
                >
                    <v-btn>
                        50
                    </v-btn>
                    <v-btn>
                        75
                    </v-btn>
                    <v-btn>
                        100
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data () {
        return {
            skylineValue: 0
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
    },
    watch: {
        skylineValue (newVal, oldVal) {
            if(newVal == 0) {
                this.$store.commit("skylineHeight", 50)
            } else if(newVal == 1) {
                this.$store.commit("skylineHeight", 75)
            } else if(newVal == 2) {
                this.$store.commit("skylineHeight", 100)
            }
        }
    }
}
</script>

