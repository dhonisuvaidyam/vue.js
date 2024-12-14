<template>
    <div class="container p-0">
        <div class="d-flex gap-3 mt-4">
            <div class="card card2 main-div w-100">
                <div class="p-3">
                    <h2 class="mb-1 day text-light">Today</h2>
                    <p class="text-light date mb-0">{{ date }}</p>
                    <small class="text-light">{{ time }}</small>
                    <h2 class="place text-light"><small>{{ country }}</small></h2>
                    <div class="temp">
                        <h1 class="weather-temp text-light">{{ temperature }} &deg;</h1>
                        <h2 class="text-light">{{ description }} <img :src="iconUrl" alt="Weather Icon"
                                class="weather-icon" /> </h2>
                    </div>

                </div>
            </div>
            <div class="card card-2 w-100">
                <table class="m-4">
                    <tbody>
                        <tr>
                            <th>FeelsLike</th>
                            <td>{{ feelsLike }}</td>
                        </tr>
                        <tr>
                            <th>Humidity</th>
                            <td>{{ humidity }}</td>
                        </tr>
                        <tr>
                            <th>Wind</th>
                            <td>{{ wind }}</td>
                        </tr>
                    </tbody>
                </table>

                <Weatherdays :cityname="cityname" />

                <div id="div_form" class="d-flex m-3 justify-content-center">
                    <form action="">
                        <input type="button" value="Change Location" @click="changelocation"
                            class="btn change-btn btn-primary">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Weatherdays from './Weatherdays.vue';

export default {
    name: 'Weather',
    components: {
        Weatherdays,
    },
    props: {
        city: String,
    },
    data() {
        return {
            cityname: this.city,
            temperature: null,
            description: null,
            iconUrl: null,
            date: null,
            time: null,
            country: null,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            feelsLike: null,
            wind: null,
            humidity: null,

        };
    },
    methods: {
        changelocation() {
            window.location.reload();
        }
    },
    async created() {
        try {
            const response = await axios.get(`http://api.weatherstack.com/current?access_key=cef82e95fb5d70875fa57a245419d4b6&query=${this.city}`);
            const weatherData = response.data;

            // Parse the API response
            this.temperature = weatherData.current.temperature;
            this.description = weatherData.current.weather_descriptions[0];
            this.iconUrl = weatherData.current.weather_icons[0];
            this.country = weatherData.location.country;
            this.wind = weatherData.current.wind_speed;
            this.feelsLike = weatherData.current.feelslike;
            this.humidity = weatherData.current.humidity;


            // Set date and time
            const d = new Date();
            this.date = `${d.getDate()}-${this.monthNames[d.getMonth()]}-${d.getFullYear()}`;
            this.time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    },
};
</script>

<style>
body {
    background-color: #343d4b;
}

.weather-temp {
    margin: 0;
    font-weight: 700;
    font-size: 4em;
}

h2.mb-1.day {
    font-size: 3em;
    font-weight: 400;
}

.main-div {
    /* border-radius: 20px; */
    color: #181111;
    background-image: url("https://images.unsplash.com/photo-1651523862184-5663390bea44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww");
    background-size: cover;
    background-position: center;
    /* background-blend-mode: overlay; */
    background-color: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
}

.temp {
    position: absolute;
    bottom: 0;
}

.main-div:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
    z-index: 1;
}

.card-2 {
    background-color: #212730 !important;
    border-radius: 20px;
    border-color: none !important;
}

.card {
    border-color: none !important;
}

.card-details {
    margin-left: 19px;
}

.h1_left {
    position: absolute;
    bottom: 25px;
    left: 16px;
    font-size: 3vw;
    line-height: 1.2;
}

.h3_left {
    position: absolute;
    left: 16px;
    font-size: 2vw;
    line-height: 0.5;
}

.h3_left small {
    font-size: 1rem;
}



table {
    position: relative;
    left: 15px;
    border-collapse: separate;
    border-spacing: 15px;
    width: 85%;
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
}

th,
td {
    font-size: 18px;
    color: #fff;
}

td {
    text-align: right;
}

table,
tr:hover {
    color: red;
}

.change-btn {
    background-image: linear-gradient(to right, cyan, magenta);
}

.change-btn:hover {
    transform: scale(0.9);
    transition: transform 0.1s ease;
}
</style>