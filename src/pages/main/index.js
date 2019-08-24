import React, { Component } from 'react'
import api from '../../services/api'
// import getLocation from '../../services/position'

import './styles.css'
// import { async } from 'q';
// import { Promise } from 'q';

export default class Main extends Component {
    state = {
        city: '',
        temperature: '',
        observation: [],
        day: '',
        dayOfWeek: '',
        month: '',
        hour: '',
        minutes: ''
    }

    componentDidMount() {
        this.loadWheather()
        this.loadDate()
    }
    loadWheather = async () => {

        const resp = await api.get(`report.json?product=observation&name=Rio%20de%20janeiro&app_id=DswSqqnwDV2Ux2DtRtW1&app_code=dnmnNxuTzJt8Ki0fIk2pHw`)

        this.setState({
            city: resp.data.observations.location[0].city,
            temperature: resp.data.observations.location[0].observation[0].temperature,
            observation: resp.data.observations.location[0].observation[0]

        })

    }

    loadDate = () => {
        const data = new Date()
        const arrayOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ]
        const arrayOfMonth = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        
        let day = data.getDate()
        let dayOfWeek = data.getDay()
        let month = data.getMonth()
        let hour = data.getHours()
        let minutes = data.getMinutes()

        this.setState({
            day: day,
            dayOfWeek: `${arrayOfWeek[dayOfWeek]}`,
            month: `${arrayOfMonth[month]}`,
            hour: hour,
            minutes: minutes
        })
        
    }
    
    render() {
        const { 
            temperature, 
            city, 
            observation, 
            day,
            dayOfWeek,
            month,
            hour,
            minutes } = this.state
       
        return (
            <div className="main-content">
                <p className="content" id="city">{city}</p>
                <p className="content" id="date">
                    {dayOfWeek}, {day} de {month} {hour} : {minutes}
                </p>

                <p className="content"
                    id="temp">
                    {temperature.slice(0, 2)} °c
                </p>

                <div id="condition">
                    <p>
                        {observation.description}
                        <img className="icon" src={observation.iconLink} alt={observation.iconName} />
                    </p>
                </div>

                <div className="tempHL">
                    <p>Temperatura minima: {observation.lowTemperature} °c
                        <i className="iconH fas fa-temperature-high"></i>
                    </p>
                    <p>Temperatura maxima: {observation.highTemperature} °c
                        <i className="iconL fas fa-temperature-high"></i>
                    </p>
                </div>

            </div>
        )
    }
}