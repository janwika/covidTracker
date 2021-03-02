import React from 'react';
import WorldMapWrapped from './WorldMapWrapped.js'
import { Card } from 'react-bootstrap';

class WorldMap extends React.Component{
    constructor(){
        super();
        this.state = {
            data: null,
            isLoading: true
        }
    }

    componentDidMount(){
        fetch("https://corona-api.com/countries")
          .then(response => response.json())
          .then(data => {
            this.setState({
                data: data,
                isLoading: false
            })
            });
        }

    render(){
        return(
            <>
            <Card className="Map">
                <Card.Title >
                    Infected today
                </Card.Title>
            </Card>
            <Card className="Map">
                {!this.state.isLoading? <WorldMapWrapped props={this.state.data} /> : <p>Loading, please wait ...</p>}
            </Card>
            <Card className="Map">
                <Card.Title >
                    Why are there 0 cases?
                </Card.Title>
                <Card.Body>
                Countries publish their current statitistics at different times. Since this map represents the newly infected people for today, it is possible that a given country hasn't published the data yet.
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default WorldMap