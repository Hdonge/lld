class Building {
    constructor(
        public walls: number,
        public paint: string,
        public flooringType: string,
        public roofType: string,
    ) { }

    clone() {
        return Object.create(this);
    }
}

const buildingWithYelloPaint: Building = new Building(4, 'yellow', 'marble', 'hip');
let buildingWithWhitePaint: Building = buildingWithYelloPaint.clone();
buildingWithWhitePaint.paint = 'white';