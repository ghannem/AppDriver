export class Line {
    id: number;
    latin_code: string;
    arabic_code: string;
    latin_description: string;
    arabic_description: string;
    color: string;
    itineraries: string[];

    constructor() {
        this.id = 0;
        this.latin_code = '';
        this.arabic_code = '';
        this.latin_description = '';
        this.arabic_description = '';
        this.color = '';
        this.itineraries = [];
    }

}
