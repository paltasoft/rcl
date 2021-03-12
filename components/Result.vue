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
        <br/>
        <span style="font-weight:bold">Prezzo Totale (light): {{ (totalPrice + totalPrice * 0.03).toFixed(2) }} €</span>
    </v-card-subtitle>
    <v-card-text> 
        <v-row no-gutters>
            <v-col v-for="(a, index) in accessori" :key="index" cols="4">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>{{a.label}}</v-list-item-title>
                        <v-list-item-subtitle>
                            {{a.quantity}} x {{a.unitPrice}} € = <span style="font-weight:bold">{{ (a.quantity*a.unitPrice).toFixed(2) }} €</span>
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
                label: "Allin L",
                quantity: this.$store.state.AllinL,
                unitPrice: 1.5
            });
            res.push({
                id: "AllinZ",
                label: "Allin Z",
                quantity: this.$store.state.AllinZ,
                unitPrice: 3
            });
            res.push({
                id: "Angolare",
                label: "Angolare",
                quantity: this.$store.state.Angolare,
                unitPrice: 2.5
            });
            res.push({
                id: "Basamento",
                label: "Basamento",
                quantity: this.$store.state.Basamento,
                unitPrice: 25.5
            });
            res.push({
                id: "ElementoCrocera",
                label: "Crocera",
                quantity: this.$store.state.ElementoCrocera,
                unitPrice: 1.9
            });
            res.push({
                id: "GiuntoAlto",
                label: "Giun. Alto",
                quantity: this.$store.state.GiuntoAlto,
                unitPrice: 1.4
            });
            res.push({
                id: "GiuntoBasso",
                label: "Giun. Basso",
                quantity: this.$store.state.GiuntoBasso,
                unitPrice: 5
            });
            res.push({
                id: "Lastra25X50",
                label: "Lastra 25X50",
                quantity: this.$store.state.Lastra25X50,
                unitPrice: 20
            });
            res.push({
                id: "Lastra50X50",
                label: "Lastra 50X50",
                quantity: this.$store.state.Lastra50X50,
                unitPrice: 28
            });
            res.push({
                id: "PiastraAngolare",
                label: "P. Angolare",
                quantity: this.$store.state.PiastraAngolare,
                unitPrice: 7.5
            });
            res.push({
                id: "PiastraL",
                label: "Piastra L",
                quantity: this.$store.state.PiastraL,
                unitPrice: 6.5
            });
            res.push({
                id: "PiastraLineare",
                label: "P. Lineare",
                quantity: this.$store.state.PiastraLineare,
                unitPrice: 6.5
            });
            res.push({
                id: "SpinottoCorto",
                label: "Spinotto",
                quantity: this.$store.state.SpinottoCorto,
                unitPrice: 0
            });
            res.push({
                id: "SquadrettaAncoraggio",
                label: "Squad. Anc.",
                quantity: this.$store.state.SquadrettaAncoraggio,
                unitPrice: 0.5
            });
            res.push({
                id: "TiranteObliquo",
                label: "Tir. Obliquo",
                quantity: this.$store.state.TiranteObliquo,
                unitPrice: 5.30
            });
            res.push({
                id: "TiranteObliquoH50",
                label: "Tir. Obl. H50",
                quantity: this.$store.state.TiranteObliquoH50,
                unitPrice: 5.30
            });
            res.push({
                id: "TiranteObliquoH75",
                label: "Tir. Obl. H75",
                quantity: this.$store.state.TiranteObliquoH75,
                unitPrice: 5.30
            });
            res.push({
                id: "TiranteObliquoH100",
                label: "Tir. Obl. H100",
                quantity: this.$store.state.TiranteObliquoH100,
                unitPrice: 5.30
            });
            res.push({
                id: "TiranteOrizzontale",
                label: "Tir. Oriz.",
                quantity: this.$store.state.TiranteOrizzontale,
                unitPrice: 5
            });
            return res;
        }
    }
}
</script>

