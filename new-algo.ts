type Cell = {
	topLeft: string;
	topRight: string;
	bottomLeft: string;
	bottomRight: string;
	row: number;
	column: number;
	selected: boolean;
	height?: 50 | 75 | 100
}

type Near = {
	diagTopLeft: Cell | undefined,
	top: Cell | undefined,
	diagTopRight: Cell | undefined,
	left: Cell | undefined,
	right: Cell | undefined,
	diagBottomLeft: Cell | undefined,
	bottom: Cell | undefined,
	diagBottomRight: Cell | undefined,
}

type Angle = {
	type: "external" | "internal" | "linear" | "central",
	index: string;
	row: number;
	column: number;
	position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

type Result = {
	slab50x50: number;
	slab25x50: number;
	topJoint: number;
	bottomJoint: number;
	tiranteOrizzontale: number;
	obliqueTie50: number;
	obliqueTie75: number;
	obliqueTie100: number;
	piantana: number;
	angolare: number;
	squadrettaAncoraggio: number;
	crocera: number;
	basamento: number;
	spinottoCorto: number;
	piastraLineare: number;
	piastraAngolare: number;
	piastraL: number;
	allinZ: number;
	allinL: number;	
}

let plan: Cell[] = [];
let draw: Cell[] = [];

const workedAngles: Angle[] = [];

function getWorkingPlan(rows: number, columns: number): Cell[] {
	const cells: Cell[] = [];
	for(let r = 0; r < rows; r++) {
		for(let c = 0; c < columns; c++) {
			const cell: Cell = {
				row: r,
				column: c,
				selected: false,
				topLeft: `${r}.${c}`,
				topRight: `${r}.${c + 1}`,
				bottomLeft: `${r + 1}.${c}`,
				bottomRight: `${r + 1}.${c + 1}`,
			}
			if(r == 0 && c == 0) {
				cell.selected = true;
				cell.height = 50;
			}
			if(r == 0 && c == 1) {
				cell.selected = true;
				cell.height = 50;
			}
			if(r == 0 && c == 2) {
				cell.selected = true;
				cell.height = 50;
			}
			if(r == 0 && c == 3) {
				cell.selected = true;
				cell.height = 50;
			}
			if(r == 1 && c == 1) {
				cell.selected = true;
				cell.height = 50;
			}
			if(r == 1 && c == 2) {
				cell.selected = true;
				cell.height = 50;
			}
			cells.push(cell);
		}
	}
	return cells;
}

function getNearCells(cell: Cell): Near {
	const near: Near = {
		diagTopLeft: draw.find((x) => x.row == cell.row - 1 && x.column == cell.column - 1),
		top: draw.find((x) => x.row == cell.row - 1 && x.column == cell.column),
		diagTopRight: draw.find((x) => x.row == cell.row - 1 && x.column == cell.column + 1),
		left: draw.find((x) => x.row == cell.row && x.column == cell.column - 1),
		right: draw.find((x) => x.row == cell.row && x.column == cell.column + 1),
		diagBottomLeft: draw.find((x) => x.row == cell.row + 1 && x.column == cell.column - 1),
		bottom: draw.find((x) => x.row == cell.row + 1 && x.column == cell.column),
		diagBottomRight: draw.find((x) => x.row == cell.row + 1 && x.column == cell.column + 1)
	}
	return near;
}

function getSlabs(): number {
	return 0;
}

function getInternalAngles(): void {
	for(const c of draw) {
		const near = getNearCells(c);

		//Top Left Angle
		if(!workedAngles.find((x) => x.index == c.topLeft)) {
			if(!near.left && !near.top) {
				workedAngles.push({
					index: c.topLeft,
					type: "internal",
					row: c.row,
					column: c.column,
					position: "topLeft"
				});
			}
		}

		//Top Right Angle
		if(!workedAngles.find((x) => x.index == c.topRight)) {
			if(!near.right && !near.top) {
				workedAngles.push({
					index: c.topRight,
					type: "internal",
					row: c.row,
					column: c.column,
					position: "topRight"
				});
			}
		}

		//Bottom Left Angle
		if(!workedAngles.find((x) => x.index == c.bottomLeft)) {
			if(!near.left && !near.bottom) {
				workedAngles.push({
					index: c.bottomLeft,
					type: "internal",
					row: c.row,
					column: c.column,
					position: "bottomLeft"
				});
			}
		}

		//Bottom Right Angle
		if(!workedAngles.find((x) => x.index == c.bottomRight)) {
			if(!near.right && !near.bottom) {
				workedAngles.push({
					index: c.bottomRight,
					type: "internal",
					row: c.row,
					column: c.column,
					position: "bottomRight"
				});
			}
		}
	}
}

function getExternalAngles(): void {
	for(const c of draw) {
		const near = getNearCells(c);

		//Top Left Angle
		if(!workedAngles.find((x) => x.index == c.topLeft)) {
			if(near.left && near.top && !near.diagTopLeft) {
				workedAngles.push({
					index: c.topLeft,
					type: "external",
					row: c.row,
					column: c.column,
					position: "topLeft"
				});
			}
		}

		//Top Right Angle
		if(!workedAngles.find((x) => x.index == c.topRight)) {
			if(near.right && near.top && !near.diagTopRight) {
				workedAngles.push({
					index: c.topRight,
					type: "external",
					row: c.row,
					column: c.column,
					position: "topRight"
				});
			}
		}

		//Bottom Left Angle
		if(!workedAngles.find((x) => x.index == c.bottomLeft)) {
			if(near.left && near.bottom && !near.diagBottomLeft) {
				workedAngles.push({
					index: c.bottomLeft,
					type: "external",
					row: c.row,
					column: c.column,
					position: "bottomLeft"
				});
			}
		}

		//Bottom Right Angle
		if(!workedAngles.find((x) => x.index == c.bottomRight)) {
			if(near.right && near.bottom && !near.diagBottomRight) {
				workedAngles.push({
					index: c.bottomRight,
					type: "external",
					row: c.row,
					column: c.column,
					position: "bottomRight"
				});
			}
		}
	}
}

function getLinearAngles(): void {
	for(const c of draw) {
		const near = getNearCells(c);

		//Top Left Angle
		if(!workedAngles.find((x) => x.index == c.topLeft)) {
			if((near.left && !near.top && !near.diagTopLeft) || (near.top && !near.left && !near.diagTopLeft)) {
				workedAngles.push({
					index: c.topLeft,
					type: "linear",
					row: c.row,
					column: c.column,
					position: "topLeft"
				});
			}
		}

		//Top Right Angle
		if(!workedAngles.find((x) => x.index == c.topRight)) {
			if((near.right && !near.top && !near.diagTopRight) || (near.top && !near.right && !near.diagTopRight)) {
				workedAngles.push({
					index: c.topRight,
					type: "linear",
					row: c.row,
					column: c.column,
					position: "topRight"
				});
			}
		}

		//Bottom Left Angle
		if(!workedAngles.find((x) => x.index == c.bottomLeft)) {
			if((near.left && !near.bottom && !near.diagBottomLeft) || (near.bottom && !near.left && !near.diagBottomLeft)) {
				workedAngles.push({
					index: c.bottomLeft,
					type: "linear",
					row: c.row,
					column: c.column,
					position: "bottomLeft"
				});
			}
		}

		//Bottom Right Angle
		if(!workedAngles.find((x) => x.index == c.bottomRight)) {
			if((near.right && !near.bottom && !near.diagBottomRight) || (near.bottom && !near.right && !near.diagBottomRight)) {
				workedAngles.push({
					index: c.bottomRight,
					type: "linear",
					row: c.row,
					column: c.column,
					position: "bottomRight"
				});
			}
		}
	}
}

function getCentralAngles(): void {
	for(const c of draw) {
		const near = getNearCells(c);

		//Top Left Angle
		if(!workedAngles.find((x) => x.index == c.topLeft)) {
			if(near.left && near.top && near.diagTopLeft) {
				workedAngles.push({
					index: c.topLeft,
					type: "central",
					row: c.row,
					column: c.column,
					position: "topLeft"
				});
			}
		}

		//Top Right Angle
		if(!workedAngles.find((x) => x.index == c.topRight)) {
			if(near.right && near.top && near.diagTopRight) {
				workedAngles.push({
					index: c.topRight,
					type: "central",
					row: c.row,
					column: c.column,
					position: "topRight"
				});
			}
		}

		//Bottom Left Angle
		if(!workedAngles.find((x) => x.index == c.bottomLeft)) {
			if(near.left && near.bottom && near.diagBottomLeft) {
				workedAngles.push({
					index: c.bottomLeft,
					type: "central",
					row: c.row,
					column: c.column,
					position: "bottomLeft"
				});
			}
		}

		//Bottom Right Angle
		if(!workedAngles.find((x) => x.index == c.bottomRight)) {
			if(near.right && near.bottom && near.diagBottomRight) {
				workedAngles.push({
					index: c.bottomRight,
					type: "central",
					row: c.row,
					column: c.column,
					position: "bottomRight"
				});
			}
		}
	}
}

(async () => {
	plan = getWorkingPlan(4, 4);
	draw = plan.filter((x) => x.selected == true);
	
	getInternalAngles();
	getExternalAngles();
	getLinearAngles();
	getCentralAngles();

	const internalAngles = workedAngles.filter((x) => x.type == "internal");
	const externalAngles = workedAngles.filter((x) => x.type == "external");
	const linearAngles = workedAngles.filter((x) => x.type == "linear");
	const centralAngles = workedAngles.filter((x) => x.type == "central");

	const res: Result = {
		allinL: 0,
		allinZ: 0,
		angolare: 0,
		basamento: draw.length,
		bottomJoint: 0,
		crocera: 0,
		obliqueTie100: 0,
		obliqueTie50: 0,
		obliqueTie75: 0,
		piantana: 0,
		piastraAngolare: 0,
		piastraL: 0,
		piastraLineare: 0,
		slab25x50: 0,
		slab50x50: 0,
		spinottoCorto: draw.length * 4,
		squadrettaAncoraggio: 0,
		tiranteOrizzontale: 0,
		topJoint: 0
	}

	for(const internalAngle of internalAngles) {
		const height = draw.find((x) => x.row == internalAngle.row && x.column == internalAngle.column)?.height;
		if(height == 50) {
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;
		} else if(height == 75) {
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;
			res.piastraAngolare += 1;
		} else if(height == 100) {
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;
			res.piastraAngolare += 1;
		}
	}

	for(const externalAngle of externalAngles) {
		const height = draw.find((x) => x.row == externalAngle.row && x.column == externalAngle.column)?.height;
		let heightH = undefined;
		let heightV = undefined;
		if(externalAngle.position == "topLeft") {
			heightH = draw.find((x) => x.row == externalAngle.row && x.column == externalAngle.column - 1)?.height;
			heightV = draw.find((x) => x.row == externalAngle.row - 1 && x.column == externalAngle.column)?.height;
		} else if(externalAngle.position == "topRight") {
			heightH = draw.find((x) => x.row == externalAngle.row && x.column == externalAngle.column + 1)?.height;
			heightV = draw.find((x) => x.row == externalAngle.row - 1 && x.column == externalAngle.column)?.height;
		} else if(externalAngle.position == "bottomLeft") {
			heightH = draw.find((x) => x.row == externalAngle.row && x.column == externalAngle.column - 1)?.height;
			heightV = draw.find((x) => x.row == externalAngle.row + 1 && x.column == externalAngle.column)?.height;
		} else if(externalAngle.position == "bottomRight") {
			heightH = draw.find((x) => x.row == externalAngle.row && x.column == externalAngle.column + 1)?.height;
			heightV = draw.find((x) => x.row == externalAngle.row + 1 && x.column == externalAngle.column)?.height;
		}

		if(height == 50 && heightH == 50 && heightV == 50) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;

		}
		if(height == 50 && heightH == 50 && heightV == 75) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
			
		}
		if(height == 50 && heightH == 50 && heightV == 100) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
			
		}
		if(height == 50 && heightH == 75 && heightV == 50) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
			
		}
		if(height == 50 && heightH == 75 && heightV == 75) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 6;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 2;
			
		}
		if(height == 50 && heightH == 75 && heightV == 100) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 6;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 2;
			
		}
		if(height == 50 && heightH == 100 && heightV == 50) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 2;
			
		}
		if(height == 50 && heightH == 100 && heightV == 75) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 6;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 2;
			
		}
		if(height == 50 && heightH == 100 && heightV == 100) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 6;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 2;
			
		}
		if(height == 75 && heightH == 75 && heightV == 50) {
			res.topJoint += 1;
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 3;
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
		}
		if(height == 75 && heightH == 75 && heightV == 75) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 4;
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;
			res.piastraAngolare += 1;
		}
		if(height == 75 && heightH == 75 && heightV == 100) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 4;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraAngolare += 1;
			res.allinZ += 1;
			res.allinL += 1;
		}
		if(height == 75 && heightH == 50 && heightV == 50) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 2;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
		}
		if(height == 75 && heightH == 50 && heightV == 75) {
			res.topJoint += 1;
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 3;
			res.angolare += 2;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
		}
		if(height == 75 && heightH == 50 && heightV == 100) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 3;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
			res.allinZ += 1;
			res.allinL += 1;
		}
		if(height == 75 && heightH == 100 && heightV == 100) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 4;
			res.angolare += 6;
			res.squadrettaAncoraggio += 1;
			res.piastraAngolare += 1;
			res.allinZ += 2;
		}
		if(height == 75 && heightH == 100 && heightV == 75) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 4;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraAngolare += 1;
			res.allinZ += 1;
			res.allinL += 1;
		}
		if(height == 75 && heightH == 100 && heightV == 50) {
			res.bottomJoint += 1;
			res.tiranteOrizzontale += 3;
			res.angolare += 4;
			res.squadrettaAncoraggio += 1;
			res.piastraL += 1;
			res.allinZ += 1;
			res.allinL += 1;
		}
	}

	//tiranti obliqui
	// for(const ca of centralAngles) {
	// 	const first = Number(ca.index.split(".")[0]);
	// 	const second = Number(ca.index.split(".")[1]);
	// 	if(linearAngles.find((x) => x.index == `${first}.${second - 1}`)) {
	// 		res.ti++;
	// 	}
	// 	if(linearAngles.find((x) => x.index == `${first - 1}.${second}`)) {
	// 		test++;
	// 	}
	// 	if(linearAngles.find((x) => x.index == `${first}.${second + 1}`)) {
	// 		test++;
	// 	}
	// 	if(linearAngles.find((x) => x.index == `${first + 1}.${second}`)) {
	// 		test++;
	// 	}
	// }

	console.log(res);
})();
