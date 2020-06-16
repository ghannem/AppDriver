export class ApiUrl {
    private static baseURL = 'http://localhost:8080/siv/api'; // Serveur localhost
    // private static baseURL = 'https://saeiv.ardia.com.tn:19705/siv/api'; // Serveur Valid
    // private static baseURL = 'https://saeiv.ardia.com.tn:20491/siv/api'; // Serveur IC

    static get getBaseURL() {
        return this.baseURL;
    }

}
