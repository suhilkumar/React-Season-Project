import React, { Component } from 'react'
import SeasonDisplay from './Components/SeasonDisplay'
import Spinner from './Components/Spinner'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: null,
            error: '',
        }

    }
    componentDidMount(){
        window
        .navigator.geolocation
        .getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),

           err => this.setState({ error: err.message })
        )

        console.log('My Component was rendered to the screen')
    }

    
    // requirement of react 
    render() {
        if (this.state.error && !this.state.lat) {
            return <div>Error: {this.state.error}</div>
        }
        if (!this.state.error && this.state.lat) {
            return <SeasonDisplay latitude={this.state.lat}/>
        }
        return <Spinner />


    }
}
