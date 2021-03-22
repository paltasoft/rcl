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
            <v-col cols="12">
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
        <v-row>
            <v-col>
                <v-switch
                    v-model="useTrainer"
                    label="Trainer"
                ></v-switch>
            </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data () {
        return {
            calcola: false,
            skylineValue: 0,
            useTrainer: false
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
        },
        useTrainer (newVal, oldVal) {
            this.$store.commit("useTrainer", newVal)
        }
    }
}
</script>

