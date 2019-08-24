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
    }

    componentDidMount() {
        this.loadWheather()    
    }
    loadWheather = async () => {
        
        const resp = await api.get(`report.json?product=observation&name=Rio%20de%20janeiro&app_id=DswSqqnwDV2Ux2DtRtW1&app_code=dnmnNxuTzJt8Ki0fIk2pHw`)

        this.setState({ 
            city: resp.data.observations.location[0].city, 
            temperature: resp.data.observations.location[0].observation[0].temperature,
            observation: resp.data.observations.location[0].observation[0] 
            
        })
        console.log(resp.data.observations.location[0].observation[0])
        
    }

    render() {
        const { temperature ,city, observation } = this.state
        
        return (
            <div className="main-content">
                <p className="content" id="city">{ city }</p>
                {/* <p className="content" id="date">Sex, 16 de agosto 00:22</p> */}
                <p className="content" id="temp">{ temperature.slice(0, 2) } °C</p>
                <p className="content" id="condition"> { observation.description }</p>
                <p>Temperatura minima: { observation.lowTemperature } °C</p>
                <p>Temperatura maxima: { observation.highTemperature } °C</p>
            {/* <img href={observation.iconLink} /> */}
            </div>
        )
    }
}