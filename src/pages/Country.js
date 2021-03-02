import React from 'react';
import AllCountries from '../AllCountries.js';
import ListForm from '../Components/ListForm.js';
import {Form, Card, ListGroup} from 'react-bootstrap';

class Country extends React.Component{
    constructor(){
        super();
        this.state = {
            search: null,
            countryName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const{name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const countries = AllCountries();
        console.log(this.state.countryName.substring(0, this.state.countryName.length))
        let countrySel = countries.filter( country => {
            if(this.state.countryName.toUpperCase() === country.name.substring(0, this.state.countryName.length).toUpperCase()){
                return country.alpha2
            }
        })
        console.log(countrySel);
        const countrySelDis = countrySel.map(country => 
            <ListForm props={country} />
        )
        return(
            
            <>
            <Card className="Map">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Country</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.countryName}
                            name="countryName" 
                            placeholder="Country" 
                            onChange={this.handleChange} 
                        />
                        <Form.Text className="text-muted">
                        Then click on the Country
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card>
            <Card className="Map">
                <ListGroup as="ul">
                    {countrySelDis}
                </ListGroup>
            </Card>
            </>
        )
    }
}

export default Country