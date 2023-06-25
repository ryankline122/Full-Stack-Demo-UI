// personService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/person';

class PersonService {
    getAllPersons() {
        console.log("Here");
        return axios.get(API_URL);
    }

    addPerson(name){
        const data = {
            name: name
        };

        return axios.post(API_URL, data);
    }
}

export default new PersonService();