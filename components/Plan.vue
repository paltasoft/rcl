<template>
<div>
    <div id="width-calculator" :style="`width:${cellWidth}%`"></div>
    <v-overlay :value="loading">
      <Loader />
    </v-overlay>
    <div v-for="(q, index) in quotes" :key="index" :ref="`q_${q.rowStart}_${q.columnStart}_${q.rowEnd}_${q.columnEnd}`" class="quote" 
    :style="`
    position: absolute;
    font-size: 12px;
    left: ${q.left}px;
    top: ${q.top}px;
    width: ${q.width}px;
    height: ${q.height}px;
    line-height: ${q.type == 'row' ? '0' : q.height}px;
    text-align:center;
    z-index:3`">
        {{ q.value }} m
    </div>
    <table class="plan-table" ref="planTable">
        <tr v-for="(r, rowIndex) in cellGroup" :key="rowIndex">
            <td v-for="(c, columnIndex) in r" :key="columnIndex" :ref="`cell_${rowIndex}_${columnIndex}`"  :class="`cell ${cellClass(rowIndex, columnIndex)}`" @click="selectCell(rowIndex, columnIndex)" @mouseover="mouseoverCell($event, rowIndex, columnIndex)" :style="`width:${cellWidth}%;height:${cellHeight}`">
                <span>{{cellContent(rowIndex, columnIndex)}}</span>
            </td>
        </tr>
    </table>
    <Trainer :show="dialog" :combinazione="combinazioneTrainer" v-on:closeTrainer="closeTrainer"/>
</div>
</template>

<style>
.plan-table {
    position: relative;
    z-index: 4;
    width: 100%;
    border-collapse: collapse; 
}
.cell {
    text-align: center;
    border: 1px solid lightgray;
    background-color: rgba(252,232,181, 0);
}

.cell-selected {
  background-color: rgba(252,232,181, 0.5);
}

.cell-unkown {
  background-color: rgba(255, 0, 0, 0.5);
}
</style>

<script>
function absolutePosition(el) {
    var
        found,
        left = 0,
        top = 0,
        width = 0,
        height = 0,
        x = 0,
        y = 0,
        offsetBase = absolutePosition.offsetBase;
    if (!offsetBase && document.body) {
        offsetBase = absolutePosition.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
    if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
        var boundingRect = el.getBoundingClientRect();
        var baseRect = offsetBase.getBoundingClientRect();
        found = true;
        left = boundingRect.left - baseRect.left;
        top = boundingRect.top - baseRect.top;
        width = boundingRect.right - boundingRect.left;
        height = boundingRect.bottom - boundingRect.top;
    }
    return {
        found: found,
        left: left,
        top: top,
        width: width,
        height: height,
        right: left + width,
        bottom: top + height
    };
}

//TODO: Quote disegnate
//TODO: Stampa
//TODO: Salva
//TODO: Apri

import dataset from '~/combinazioni/combinazioni.json';

import _, { map } from 'underscore';

export default {
    name: "PlanView",
    data () {
        return {
            combinazioneTrainer: [],
            dialog: false,
            loading: true,
            rows: 30,
            columns: 30,
            cellWidthMeters: 0.5,
            cells: [],
            quotes: []
        }
    },
    mounted () {
        this.loading = true;
        for(var r = 0; r < this.rows; r++) {
            for(var c = 0; c < this.columns; c++) {
                this.cells.push({
                    row: r,
                    column: c,
                    selected: false,
                    unkown: false,
                    h: null,
                    quota: false
                })
            }
        }
        this.loading = false;
    },
    computed: {
        skylineHeight () {
            return this.$store.state.skylineHeight
        },
        useTrainer () {
            return this.$store.state.useTrainer
        },
        cellGroup () {
            const perGroup = Math.ceil(this.cells.length / this.columns);
            return new Array(this.columns)
                .fill('')
                .map((_, i) => this.cells.slice(i * perGroup, (i + 1) * perGroup));
        },
        cellWidth () {
            return 100 / this.columns;
        },
        cellHeight () {
            var x = document.getElementById("width-calculator");
            var style = window.getComputedStyle(x, null);
            return style.width;
        }
    },
    methods: {
        cellClass (r, c) {
            var index = this.cells.findIndex(element => element.row === r && element.column === c);
            if(this.cells[index].unkown === true) {
                return "cell-unkown";
            }
            if(this.cells[index].selected === true) {
                return "cell-selected";
            }
            if(this.cells[index].quota === true) {
                return "cell-quote";
            }
            return "";
        },
        cellContent (r, c) {
            var index = this.cells.findIndex(element => element.row === r && element.column === c);
            return this.cells[index].h;
        },
        selectCell (r, c) {
            var index = this.cells.findIndex(element => element.row === r && element.column === c);
            if(this.useTrainer === true) {
                this.apriTrainer(r, c);
            } else {
                this.cells[index].selected = !this.cells[index].selected;
                if(this.cells[index].selected == true) {
                    this.cells[index].h = this.skylineHeight;
                } else {
                    this.cells[index].h = null;
                }

                this.cells[index].unkown = false;
                this.computeRowQuotes(r, c);
                this.computeColumnQuotes(r, c);
                this.calcola();
            }
        },
        apriTrainer (r, c) {
            var index = this.cells.findIndex(element => element.row === r && element.column === c);
            this.combinazioneTrainer = this.getCellMapSquare(this.cells[index]);
            this.dialog = true;
        },
        closeTrainer () {
            this.dialog = false
        },
        mouseoverCell (event, r, c) {
            if(event.buttons === 1) {
                this.selectCell(r, c);
            }
        },
        deleteRowQuotes (row) {
            const quoteIndex = this.quotes.findIndex(element => element.rowStart == row && element.type == "row");
            if(quoteIndex == -1) {
                return;
            } else {
                this.quotes.splice(quoteIndex, 1);
                this.deleteRowQuotes(row);
            }
        },
        deleteColumnQuotes (column) {
            const quoteIndex = this.quotes.findIndex(element => element.columnStart == column && element.type == "column");
            if(quoteIndex == -1) {
                return;
            } else {
                this.quotes.splice(quoteIndex, 1);
                this.deleteColumnQuotes(column);
            }
        },
        getContiguousGroups (selectedColumns) {
            const chunks = [];
            if(selectedColumns.length == 1) {
                chunks.push([selectedColumns[0]]);
                return chunks;
            }
            var currentChunk = [];
            selectedColumns.push(this.columns + 1)
            for(var i = 1; i <= selectedColumns.length; i++)
            {    
                if(selectedColumns[i] - selectedColumns[i-1] > 1) {
                        chunks.push(currentChunk);
                        currentChunk = [];
                        currentChunk.push(selectedColumns[i])
                    } else {
                        currentChunk.push(selectedColumns[i-1])
                        currentChunk.push(selectedColumns[i])
                        currentChunk = [...new Set(currentChunk)]
                    }
            }
            return chunks;
        },
        computeRowQuotes (row, column) {
            this.deleteRowQuotes(row);
            const rowCells = this.cells.filter(element => element.row === row);
            const rowCellLine = rowCells.filter(element => element.selected === true);
            const selectedColumns = rowCellLine.map((_, i) => _.column);
            const selectedColumnsGroups = this.getContiguousGroups(selectedColumns);
            selectedColumnsGroups.forEach(selectedColumnsGroup => {
                if(selectedColumnsGroup.length <= 1) {
                    const indexToDelete = this.quotes.findIndex(element => element.rowStart == rowCellLine[0].row && element.columnStart == selectedColumnsGroup[0] && element.type == "row");
                    if(indexToDelete > -1) {
                        this.quotes.splice(indexToDelete, 1);
                    }
                    return;
                }
                const startingCellCoordinates = absolutePosition(this.$refs[`cell_${rowCellLine[0].row}_${selectedColumnsGroup[0]}`][0]);
                const quoteIndex = this.quotes.findIndex(element => element.rowStart == rowCellLine[0].row && element.columnStart == selectedColumnsGroup[0] && element.type == "row");
                if(quoteIndex === -1) {
                    this.quotes.push({
                        type: "row",
                        rowStart: rowCellLine[0].row,
                        rowEnd: rowCellLine[rowCellLine.length - 1].row,
                        columnStart: selectedColumnsGroup[0],
                        columnEnd: selectedColumnsGroup[selectedColumnsGroup.length - 1],
                        left: startingCellCoordinates.left,
                        top: startingCellCoordinates.top - startingCellCoordinates.height * 2.5,
                        width: startingCellCoordinates.width * selectedColumnsGroup.length,
                        height: startingCellCoordinates.height,
                        value: 0.5 * selectedColumnsGroup.length
                    });
                } else {
                    this.quotes[quoteIndex].value = 0.5 * selectedColumnsGroup.length
                    this.quotes[quoteIndex].width = startingCellCoordinates.width * selectedColumnsGroup.length
                }
            });
        },
        computeColumnQuotes (row, column) {
            this.deleteColumnQuotes(column);
            const columnCells = this.cells.filter(element => element.column === column);
            const columnCellLine = columnCells.filter(element => element.selected === true);
            const selectedRows = columnCellLine.map((_, i) => _.row);
            const selectedRowsGroups = this.getContiguousGroups(selectedRows);
            selectedRowsGroups.forEach(selectedRowsGroup => {
                if(selectedRowsGroup.length <= 1) {
                    const indexToDelete = this.quotes.findIndex(element => element.rowStart == selectedRowsGroup[0] && element.columnStart == columnCellLine[0].column && element.type == "column");
                    if(indexToDelete > -1) {
                        this.quotes.splice(indexToDelete, 1);
                    }
                    return;
                }
                const startingCellCoordinates = absolutePosition(this.$refs[`cell_${selectedRowsGroup[0]}_${columnCellLine[0].column}`][0]);
                const quoteIndex = this.quotes.findIndex(element => element.rowStart == selectedRowsGroup[0] && element.columnStart == columnCellLine[0].column && element.type == "column");
                if(quoteIndex === -1) {
                    this.quotes.push({
                        type: "column",
                        rowStart: selectedRowsGroup[0],
                        rowEnd: selectedRowsGroup[selectedRowsGroup.length - 1],
                        columnStart: columnCellLine[0].column,
                        columnEnd: columnCellLine[columnCellLine.length - 1].column,
                        left: startingCellCoordinates.left - startingCellCoordinates.width * 1.5,
                        top: startingCellCoordinates.top - startingCellCoordinates.height * 1.5,
                        width: startingCellCoordinates.width,
                        height: startingCellCoordinates.height * selectedRowsGroup.length,
                        value: 0.5 * selectedRowsGroup.length
                    });
                } else {
                    this.quotes[quoteIndex].value = 0.5 * selectedRowsGroup.length;
                    this.quotes[quoteIndex].width = startingCellCoordinates.width * selectedRowsGroup.length;
                }
            });
        },
        clearUnknown () {
            this.cells.forEach(cell => {
                if(cell.unkown === true) {
                    cell.unkown = false;
                }
            })
        },
        getCellMapSquare (cell) {
            const cellMap = [null, null, null, null, cell.h, null, null, null, null];

            const cellMap0 = this.cells.find(_ => _.row == cell.row - 1 && _.column == cell.column - 1);
            if(cellMap0 != undefined && cellMap0.selected === true) {
                cellMap[0] = cellMap0.h;
            }
            const cellMap1 = this.cells.find(_ => _.row == cell.row - 1 && _.column == cell.column);
            if(cellMap1 != undefined && cellMap1.selected === true) {
                cellMap[1] = cellMap1.h;
            }
            const cellMap2 = this.cells.find(_ => _.row == cell.row - 1 && _.column == cell.column + 1);
            if(cellMap2 != undefined && cellMap2.selected === true) {
                cellMap[2] = cellMap2.h;
            }
            const cellMap3 = this.cells.find(_ => _.row == cell.row && _.column == cell.column - 1);
            if(cellMap3 != undefined && cellMap3.selected === true) {
                cellMap[3] = cellMap3.h;
            }
            const cellMap5 = this.cells.find(_ => _.row == cell.row && _.column == cell.column + 1);
            if(cellMap5 != undefined && cellMap5.selected === true) {
                cellMap[5] = cellMap5.h;
            }
            const cellMap6 = this.cells.find(_ => _.row == cell.row + 1 && _.column == cell.column - 1);
            if(cellMap6 != undefined && cellMap6.selected === true) {
                cellMap[6] = cellMap6.h;
            }
            const cellMap7 = this.cells.find(_ => _.row == cell.row + 1 && _.column == cell.column);
            if(cellMap7 != undefined && cellMap7.selected === true) {
                cellMap[7] = cellMap7.h;
            }
            const cellMap8 = this.cells.find(_ => _.row == cell.row + 1 && _.column == cell.column + 1);
            if(cellMap8 != undefined && cellMap8.selected === true) {
                cellMap[8] = cellMap8.h;
            }
            return cellMap;
        },
        calcola () {
            this.$store.commit("init");
            this.clearUnknown();
            var numberofL = 0;
            var numberofQ = 0;
            var singleH = true;
            this.cells.forEach(cell => {
                if(cell.selected === true) {
                    const validL = [
                        [ null, 1, null, null, 1, 1, null, null, null],
                        [ null, null, null, null, 1, 1, null, 1, null],
                        [ null, null, null, 1, 1, null, null, 1, null],
                        [ null, 1, null, 1, 1, null, null, null, null],
                    ];
                    const validQ = [
                        [ 1, 1, null, 1, 1, null, null, null, null],
                        [ null, 1, 1, null, 1, 1, null, null, null],
                        [ null, null, null, null, 1, 1, null, 1, 1],
                        [ null, null, null, 1, 1, null, 1, 1, null],
                    ];
                    var cellMap = this.getCellMapSquare(cell);
                    var cellMapNormalized = cellMap.map(x => x === null ? x : 1);
                    const cellmapU = ([...new Set(cellMap)]).filter(x => x !== null);
                    if(cellmapU.length > 1) {
                        singleH = false;
                    }
                    var combinazioneL = validL.find(schema => _.isEqual(schema, cellMapNormalized));
                    var combinazioneQ = validQ.find(schema => _.isEqual(schema, cellMapNormalized));
                    if(combinazioneL != undefined) {
                        numberofL++;
                    }
                    if(combinazioneQ != undefined) {
                        numberofQ++;
                    }
                    var combinazione = dataset.find(schema => _.isEqual(schema.Celle, cellMap));
                    if(combinazione == undefined) {
                        cell.unkown = true;
                    } else {
                        this.$store.commit("AllinL", combinazione.AllinL);
                        this.$store.commit("AllinZ", combinazione.AllinZ);
                        this.$store.commit("Angolare", combinazione.Angolare);
                        this.$store.commit("Basamento", combinazione.Basamento);
                        this.$store.commit("ElementoCrocera", combinazione.ElementoCrocera);
                        this.$store.commit("GiuntoAlto", combinazione.GiuntoAlto);
                        this.$store.commit("GiuntoBasso", combinazione.GiuntoBasso);
                        if(singleH === true) {
                            this.$store.commit("Lastra25X50", combinazione.Lastra25X50);
                        } else {
                            if(cellMap.includes(75)) {
                                this.$store.commit("Lastra25X50", combinazione.Lastra25X50-1);
                            } else {
                                this.$store.commit("Lastra25X50", combinazione.Lastra25X50);
                            }
                        }
                        this.$store.commit("Lastra50X50", combinazione.Lastra50X50);
                        this.$store.commit("PiastraAngolare", combinazione.PiastraAngolare);
                        this.$store.commit("PiastraL", combinazione.PiastraL);
                        this.$store.commit("PiastraLineare", combinazione.PiastraLineare);
                        this.$store.commit("SpinottoCorto", combinazione.SpinottoCorto);
                        this.$store.commit("SquadrettaAncoraggio", combinazione.SquadrettaAncoraggio);
                        this.$store.commit("TiranteObliquoH50", combinazione.TiranteObliquoH50);
                        this.$store.commit("TiranteObliquoH75", combinazione.TiranteObliquoH75);
                        this.$store.commit("TiranteObliquoH100", combinazione.TiranteObliquoH100);
                        this.$store.commit("TiranteOrizzontale", combinazione.TiranteOrizzontale);
                    }
                }
            });

            this.$store.commit("SetAllinL", this.$store.state.AllinL/2);
            this.$store.commit("SetAllinZ", this.$store.state.AllinZ/2);

            if(numberofL > 0) {
                this.$store.commit("SetAngolare", this.$store.state.Angolare - 4 * numberofL);
                this.$store.commit("SetSquadrettaAncoraggio", this.$store.state.SquadrettaAncoraggio - 2 * numberofL);
                this.$store.commit("SetGiuntoBasso", this.$store.state.GiuntoBasso - 0.5 * numberofL);
            }
            if(numberofQ > 0){
                if(numberofQ % 4 === 0) {
                    this.$store.commit("SetAngolare", this.$store.state.Angolare / 2);
                    this.$store.commit("SetElementoCrocera", this.$store.state.ElementoCrocera / 4);
                    this.$store.commit("SetTiranteObliquoH50", this.$store.state.TiranteObliquoH50 / 2);
                    this.$store.commit("SetTiranteObliquoH75", this.$store.state.TiranteObliquoH75 / 2);
                    this.$store.commit("SetTiranteObliquoH100", this.$store.state.TiranteObliquoH100 / 2);
                } else if(numberofQ % 2 === 0) {
                    this.$store.commit("SetElementoCrocera", this.$store.state.ElementoCrocera / 4);
                    this.$store.commit("SetAngolare", this.$store.state.Angolare - 8 * numberofQ / 2);
                    this.$store.commit("SetGiuntoBasso", this.$store.state.GiuntoBasso - 0.5 * numberofQ / 2);
                    this.$store.commit("SetSquadrettaAncoraggio", this.$store.state.SquadrettaAncoraggio - 2 * numberofQ / 2);
                    if(this.$store.state.TiranteObliquoH50 > 0) {
                        this.$store.commit("SetTiranteObliquoH50", this.$store.state.TiranteObliquoH50 - 4 * numberofQ / 2);
                    }
                    if(this.$store.state.TiranteObliquoH75 > 0) {
                        this.$store.commit("SetTiranteObliquoH75", this.$store.state.TiranteObliquoH75 - 4 * numberofQ / 2);
                    }
                    if(this.$store.state.TiranteObliquoH100 > 0) {
                        this.$store.commit("SetTiranteObliquoH100", this.$store.state.TiranteObliquoH100 - 4 * numberofQ / 2);
                    }
                    this.$store.commit("SetTiranteOrizzontale", this.$store.state.TiranteOrizzontale - 0.5 * numberofQ / 2);
                }
            }
            if(this.$store.state.TiranteOrizzontale % 1 !== 0) {
                this.$store.commit("SetTiranteOrizzontale", this.$store.state.TiranteOrizzontale - 0.5);
            }
            
            if(singleH === false) {
                this.$store.commit("Lastra25X50", 1);
                this.$store.commit("SetPiastraL", this.$store.state.PiastraL / 2);
            }
        }
    }
}
</script>