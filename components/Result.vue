<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-card-title>
        Risultato Elaborazione
    </v-card-title>
    <v-card-subtitle>
        <span style="font-weight:bold">Prezzo Totale: {{ totalPrice }} €</span>
    </v-card-subtitle>
    <v-card-text> 
        <v-row no-gutters>
            <v-col v-for="(a, index) in accessori" :key="index" cols="4">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>{{a.label}}</v-list-item-title>
                        <v-list-item-subtitle>
                            {{a.quantity}} x {{a.unitPrice}} = <span style="font-weight:bold">{{ a.quantity*a.unitPrice }} €</span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
        </v-row>
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
        totalPrice () {
            const price = this.accessori.map(a => a.quantity * a.unitPrice).reduce((total, item) => total += item, 0)
            return price;
        },
        accessori () {
            const res = [];
            res.push({
                id: "AllinL",
                label: "AllinL",
                quantity: this.$store.state.AllinL,
                unitPrice: 1
            });
            res.push({
                id: "AllinZ",
                label: "AllinZ",
                quantity: this.$store.state.AllinZ,
                unitPrice: 1
            });
            res.push({
                id: "Angolare",
                label: "Angolare",
                quantity: this.$store.state.Angolare,
                unitPrice: 1
            });
            res.push({
                id: "Basamento",
                label: "Basamento",
                quantity: this.$store.state.Basamento,
                unitPrice: 1
            });
            res.push({
                id: "ElementoCrocera",
                label: "ElementoCrocera",
                quantity: this.$store.state.ElementoCrocera,
                unitPrice: 1
            });
            res.push({
                id: "GiuntoAlto",
                label: "GiuntoAlto",
                quantity: this.$store.state.GiuntoAlto,
                unitPrice: 1
            });
            res.push({
                id: "GiuntoBasso",
                label: "GiuntoBasso",
                quantity: this.$store.state.GiuntoBasso,
                unitPrice: 1
            });
            res.push({
                id: "Lastra25X50",
                label: "Lastra25X50",
                quantity: this.$store.state.Lastra25X50,
                unitPrice: 1
            });
            res.push({
                id: "Lastra50X50",
                label: "Lastra50X50",
                quantity: this.$store.state.Lastra50X50,
                unitPrice: 1
            });
            res.push({
                id: "PiastraAngolare",
                label: "PiastraAngolare",
                quantity: this.$store.state.PiastraAngolare,
                unitPrice: 1
            });
            res.push({
                id: "PiastraL",
                label: "PiastraL",
                quantity: this.$store.state.PiastraL,
                unitPrice: 1
            });
            res.push({
                id: "PiastraLineare",
                label: "PiastraLineare",
                quantity: this.$store.state.PiastraLineare,
                unitPrice: 1
            });
            res.push({
                id: "SpinottoCorto",
                label: "SpinottoCorto",
                quantity: this.$store.state.SpinottoCorto,
                unitPrice: 1
            });
            res.push({
                id: "SquadrettaAncoraggio",
                label: "SquadrettaAncoraggio",
                quantity: this.$store.state.SquadrettaAncoraggio,
                unitPrice: 1
            });
            res.push({
                id: "TiranteObliquo",
                label: "TiranteObliquo",
                quantity: this.$store.state.TiranteObliquo,
                unitPrice: 1
            });
            res.push({
                id: "TiranteOrizzontale",
                label: "TiranteOrizzontale",
                quantity: this.$store.state.TiranteOrizzontale,
                unitPrice: 1
            });
            return res;
        }
    }
}
</script>

