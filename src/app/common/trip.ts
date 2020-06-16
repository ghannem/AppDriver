export class Trip {
    trip_id: number;
    timetable_id: number;
    arrival_stop_arabic_name: string;
    arrival_stop_latin_name: string;
    departure_stop_arabic_name: string;
    departure_stop_latin_name: string;
    departure_time: string;
    arrival_time: string;
    total_trip_time: number;
    trip_back: boolean;
    line_id: string;
    line_latin_code: string;
    itinerary_synth_id: string;
    trip_code: string;
    bus_id: number;
}
