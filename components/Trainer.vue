<template>
<v-dialog
    v-model="show"
    width="500"
>
    <v-card>
        <v-card-title class="headline grey lighten-2">
          Trainer
        </v-card-title>

        <v-card-text>
            <v-row>
                <v-col>
                    <h3>Combinazione</h3>
                    {{ combinazione }}
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-text-field label="AllinL" v-model="combinazioneGenerata.AllinL"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="AllinZ" v-model="combinazioneGenerata.AllinZ"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Angolare" v-model="combinazioneGenerata.Angolare"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Basamento" v-model="combinazioneGenerata.Basamento"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Crocera" v-model="combinazioneGenerata.ElementoCrocera"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="GiuntoAlto" v-model="combinazioneGenerata.GiuntoAlto"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="GiuntoBasso" v-model="combinazioneGenerata.GiuntoBasso"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Lastra25X50" v-model="combinazioneGenerata.Lastra25X50"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Lastra50X50" v-model="combinazioneGenerata.Lastra50X50"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="P.Angolare" v-model="combinazioneGenerata.PiastraAngolare"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="PiastraL" v-model="combinazioneGenerata.PiastraL"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="P.Lineare" v-model="combinazioneGenerata.PiastraLineare"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Spinotto" v-model="combinazioneGenerata.SpinottoCorto"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Sq.Ancoraggio" v-model="combinazioneGenerata.SquadrettaAncoraggio"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="T.Ob.H50" v-model="combinazioneGenerata.TiranteObliquoH50"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="T.Ob.H75" v-model="combinazioneGenerata.TiranteObliquoH75"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="T.Ob.H100" v-model="combinazioneGenerata.TiranteObliquoH100"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="T.Or" v-model="combinazioneGenerata.TiranteOrizzontale"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="genera"
          >
            Genera
          </v-btn>
          <v-btn
            color="secondary"
            text
            @click="show = false"
          >
            Annulla
          </v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
</template>

<script>
import dataset from '~/combinazioni/combinazioni.json';

export default {
    data () {
        return {
            combinazioneGenerata: {
                Celle: [],
                AllinL: 0,
                AllinZ: 0,
                Angolare: 0,
                Basamento: 0,
                ElementoCrocera: 0,
                GiuntoAlto: 0,
                GiuntoBasso: 0,
                Lastra25X50: 0,
                Lastra50X50: 0,
                PiastraAngolare: 0,
                PiastraL: 0,
                PiastraLineare: 0,
                SpinottoCorto: 0,
                SquadrettaAncoraggio: 0,
                TiranteObliquoH50: 0,
                TiranteObliquoH75: 0,
                TiranteObliquoH100: 0,
                TiranteOrizzontale: 0
            }
        }
    },
    props: ["combinazione", "show"],
    methods: {
        genera () {
            this.combinazioneGenerata.Celle = this.combinazione;
            this.combinazioneGenerata.AllinL = this.combinazioneGenerata.AllinL * 1;
            this.combinazioneGenerata.AllinZ = this.combinazioneGenerata.AllinZ * 1;
            this.combinazioneGenerata.Angolare = this.combinazioneGenerata.Angolare * 1;
            this.combinazioneGenerata.Basamento = this.combinazioneGenerata.Basamento * 1;
            this.combinazioneGenerata.ElementoCrocera = this.combinazioneGenerata.ElementoCrocera * 1;
            this.combinazioneGenerata.GiuntoAlto = this.combinazioneGenerata.GiuntoAlto * 1;
            this.combinazioneGenerata.GiuntoBasso = this.combinazioneGenerata.GiuntoBasso * 1;
            this.combinazioneGenerata.Lastra25X50 = this.combinazioneGenerata.Lastra25X50 * 1;
            this.combinazioneGenerata.Lastra50X50 = this.combinazioneGenerata.Lastra50X50 * 1;
            this.combinazioneGenerata.PiastraAngolare = this.combinazioneGenerata.PiastraAngolare * 1;
            this.combinazioneGenerata.PiastraL = this.combinazioneGenerata.PiastraL * 1;
            this.combinazioneGenerata.PiastraLineare = this.combinazioneGenerata.PiastraLineare * 1;
            this.combinazioneGenerata.SpinottoCorto = this.combinazioneGenerata.SpinottoCorto * 1;
            this.combinazioneGenerata.SquadrettaAncoraggio = this.combinazioneGenerata.SquadrettaAncoraggio * 1;
            this.combinazioneGenerata.TiranteObliquoH50 = this.combinazioneGenerata.TiranteObliquoH50 * 1;
            this.combinazioneGenerata.TiranteObliquoH75 = this.combinazioneGenerata.TiranteObliquoH75 * 1;
            this.combinazioneGenerata.TiranteObliquoH100 = this.combinazioneGenerata.TiranteObliquoH100 * 1;
            this.combinazioneGenerata.TiranteOrizzontale = this.combinazioneGenerata.TiranteOrizzontale * 1;
            dataset.push(this.combinazioneGenerata);
            
            const blob = new Blob([JSON.stringify(dataset)], {type: 'application/json'})
            const e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = "combinazioni.json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['application/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);

            this.show = false;
        }
    }
}
</script>

