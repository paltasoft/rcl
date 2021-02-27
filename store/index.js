export const state = () => ({
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
    TiranteObliquo: 0,
    TiranteOrizzontale: 0
  })
  
  export const mutations = {
    init(state) {
        state.AllinL = 0,
        state.AllinZ = 0;
        state.Angolare = 0;
        state.Basamento = 0;
        state.ElementoCrocera = 0;
        state.GiuntoAlto = 0;
        state.GiuntoBasso = 0;
        state.Lastra25X50 = 0;
        state.Lastra50X50 = 0;
        state.PiastraAngolare = 0;
        state.PiastraL = 0;
        state.PiastraLineare = 0;
        state.SpinottoCorto = 0;
        state.SquadrettaAncoraggio = 0;
        state.TiranteObliquo = 0;
        state.TiranteOrizzontale = 0
    },
    AllinL(state, value) {
        state.AllinL += value
    },
    AllinZ(state, value) {
        state.AllinZ += value
    },
    Angolare(state, value) {
        state.Angolare += value
    },
    Basamento(state, value) {
        state.Basamento += value
    },
    ElementoCrocera(state, value) {
        state.ElementoCrocera += value
    },
    GiuntoAlto(state, value) {
        state.GiuntoAlto += value
    },
    GiuntoBasso(state, value) {
        state.GiuntoBasso += value
    },
    Lastra25X50(state, value) {
        state.Lastra25X50 += value
    },
    Lastra50X50(state, value) {
        state.Lastra50X50 += value
    },
    PiastraAngolare(state, value) {
        state.PiastraAngolare += value
    },
    PiastraL(state, value) {
        state.PiastraL += value
    },
    PiastraLineare(state, value) {
        state.PiastraLineare += value
    },
    SpinottoCorto(state, value) {
        state.SpinottoCorto += value
    },
    SquadrettaAncoraggio(state, value) {
        state.SquadrettaAncoraggio += value
    },
    TiranteObliquo(state, value) {
        state.TiranteObliquo += value
    },
    TiranteOrizzontale(state, value) {
        state.TiranteOrizzontale += value
    }
  }
  