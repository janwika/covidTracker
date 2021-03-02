import React from 'react';
import ChartEl from '../Components/ChartEl.js';
import {Card} from 'react-bootstrap';

class CountryStat extends React.Component{
    constructor(){
        super();
        this.state = {
            covidData: null,
            country: null,
            isLoading: true
        }
    }

    componentDidMount(){
        const countryCode = this.props.match.params.id;
        fetch("https://corona-api.com/countries/" + countryCode)
          .then(response => response.json())
          .then(data => {
            let datesRev = data.data.timeline.map(date => {
                return date.date;
            })
            const infectedRev = data.data.timeline.map((datapoint, index) => {
                return datapoint.new_confirmed;
            })
            const recoveredRev = data.data.timeline.map((datapoint, index) => {
                return datapoint.new_recovered;
            })

            const dates = datesRev.reverse();
            const infected = infectedRev.reverse();
            const recovered = recoveredRev.reverse();
        
            const infectedMean = infected.map((datapoint, index, array) => {
                let out;
                let sum = 0;      
                if(index >= 7){
                    
                    for(let i = index - 1; i >= index - 7; i--){
                        sum = sum + array[i];
                    }
                    out = datapoint + sum;
                    out = Math.floor(out / 7);
                }else{
                    out = datapoint;
                }
                return out;
            })

            const props = {
                dates: dates,
                infectedMean: infectedMean,
                recovered: recovered,
            }

            this.setState({
                covidData: props,
                isLoading: false,
                country: data.data.name,
                pop: data.data.population,
                today: data.data.today.confirmed,
                cpm: data.data.latest_data.calculated.cases_per_million_population,
                confirmed: data.data.latest_data.confirmed,
                recovered: data.data.latest_data.recovered
            })
          });
          
      }

    render(){
        return(
            <>
            <Card className="Map">
                <h1>{this.state.country}</h1>
                {!this.state.isLoading?<ChartEl props={this.state.covidData} />:<p>Loading, please wait...</p>}
            </Card>
            <Card className="Map">
            <Card.Title>Population:</Card.Title>
                {this.state.pop}
            </Card>
            <Card className="Map">
            <Card.Title>Confirmed Today:</Card.Title>
                {this.state.today}
            </Card>
            <Card className="Map">
            <Card.Title>Cases per Million:</Card.Title>
                {this.state.cpm}
            </Card>
            <Card className="Map">
            <Card.Title>Infected all time:</Card.Title>
                {this.state.confirmed}
            </Card>
            <Card className="Map">
            <Card.Title>Recovered all time:</Card.Title>
                {this.state.recovered}
            </Card>
            </>
        )
    }
}

export default CountryStat