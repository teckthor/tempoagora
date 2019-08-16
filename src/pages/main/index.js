import React, { Component } from 'react'
import api from '../../services/api'
import getLocation from '../../services/position'

import './styles.css'

export default class Main extends Component {
    state = {
        temp: [],
    }

    async componentDidMount() {
        // this.loadTemp()
        // const token = 'c7b70231067d16f99f4de4abc10ea7ae'
        const token = 'f1c9c132c8a1e4458c2fb467e34db147'
        const lat = -22.659225000000003
        const long = -43.149291399999996

        // const response = await api.get(`/weather?key=${token}`)
        // const response = await api.get(`/weather?lat=${lat}&lon=${long}&appid=${token}`)
        // const response = await api.get(`/api/v1/forecast/geo/hours/72?latitude=${lat}&longitude=${long}&token=${token}`)
            
        // this.setState({ temp: response.data })
        
        // console.log(response.data)
        getLocation()
    }

    render() {
        return (
            
            <div className="main-content">
                <p className="content" id="city">Magé</p>
                <p className="content" id="date">Sex, 16 de agosto 00:22</p>
                <p className="content" id="temp">15°c</p>
                <p className="content" id="condition">
                    <i class="fas fa-cloud"></i> 
                    Nublado</p>
            </div>
        )
    }
}