export class Itinerary {
    itinerary_synth_id: string;
    line_code_latin: string;
    line_code_arabic: string;
    arrival_stop_arabic: string;
    arrival_stop_latin: string;
    departure_stop_arabic: string;
    departure_stop_latin: string;
    color: string;
    //trips
    
    constructor() {
        this.itinerary_synth_id = '';
        this.line_code_latin = '';
        this.line_code_arabic = '';
        this.arrival_stop_arabic = '';
        this.arrival_stop_latin = '';
        this.departure_stop_arabic = '';
        this.departure_stop_latin = '';
        this.color = '';
    }

}
