import React from 'react';
import { Card, Button } from 'react-bootstrap';
import virus from '../images/virus.svg';

function Home(){
    return(
        <>
        <Card>
            <Card.Title >
                covidTracker let's you see current information about Covid-19.
            </Card.Title>
            <div>
                <img className="cell" alt="" src={virus} />
            </div>
            <Card.Body>
                <Button href="/World" style={{margin: "2px"}}>World Map</Button>
                <Button href="/Country" style={{margin: "2px"}}>Data by Country</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default Home