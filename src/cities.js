import React, { Component } from 'react';
import './App.css';

class SanJose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=san%20jose,ca,usa&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }

    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;

            return (
                <div id = "sanjose">
                    <h1>San Jose, CA</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} </p>
                        <p>Temperature (High): {high} </p>
                        <p>Temperature (low): {low} </p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = "http://www.artfixdaily.com/images/pr/Apr11_sanjose972x410.jpg" alt = "San Jose"></img>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

class Seattle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=seattle,wa,usa&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }

    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;

            return (
                <div id = "seattle">
                    <h1>Seattle, WA</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} </p>
                        <p>Temperature (High): {high} </p>
                        <p>Temperature (low): {low} </p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg" alt = "Seattle"></img>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

class Burbank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=burbank,ca,usa&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }

    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;

            return (
                <div id = "burbank">
                    <h1>Burbank, CA</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} </p>
                        <p>Temperature (High): {high} </p>
                        <p>Temperature (low): {low} </p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = "https://s.abcnews.com/images/Travel/CB_burbank_california_jef_130701_33x16_992.jpg" alt = "Burbank"></img>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

class Dallas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=dallas,tx,usa&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }

    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;

            return (
                <div id = "dallas">
                    <h1>Dallas, TX</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} </p>
                        <p>Temperature (High): {high} </p>
                        <p>Temperature (low): {low} </p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = "https://community-wealth.org/sites/clone.community-wealth.org/files/Dallas%202.jpg" alt = "Dallas"></img>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

class DC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=washington,dc,usa&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }

    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;

            return (
                <div id = "dc">
                    <h1>Washington, DC</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} </p>
                        <p>Temperature (High): {high} </p>
                        <p>Temperature (low): {low} </p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = "https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/03/1140-trv-dst-dc-main.imgcache.revd66f01d4a19adcecdb09fdacd4471fa8.web.jpg" alt = "DC"></img>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

class Chicago extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=chicago,il,usa&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }

    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;

            return (
                <div id = "chicago">
                    <h1>Chicago, IL</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} </p>
                        <p>Temperature (High): {high} </p>
                        <p>Temperature (low): {low} </p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = "http://www.doneriterecovery.com/images/chicago.jpg" alt = "Chicago"></img>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export {SanJose, Seattle, Burbank, Dallas, DC, Chicago}