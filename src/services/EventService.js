import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        // return axios.get('http://localhost:8080/db.json')
        // .then((response) => {
        //     // console.log("returning:", response.data.events);
        //     return response.data.events;
        // })
        // .catch((err) => {
        //     console.log(err);
        // });

        return apiClient.get('/events')
    },
    getEvent(id) {
        // var events;
        // var theevent;

        // return axios.get('http://localhost:8080/db.json')
        // .then((response) => {
        //     // console.log("in getEvent, res.data.ev:", response.data.events);
        //     events = response.data.events;
        //     theevent = events.filter(e => e.id == id);
        //     // console.log("in getEvent, events var after ax:",events);
        //     // return events;
        //     return theevent;
        // })
        // .catch((err) => {
        //     console.log(err);
        // });

        return apiClient.get('/events/' + id)
    }
}