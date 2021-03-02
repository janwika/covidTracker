import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartEl(props){
    return(
        <div>
            <Line 
                type='line'
                data={{
                    xLabels: props.props.dates,
                    datasets: [
                        {
                            label: 'Recovered (Daily)',
                            data: props.props.recovered,
                            backgroundColor: '#ccc'
                        },
                        {
                        label: 'Infected (7 Day Average)',
                        data: props.props.infectedMean,
                        backgroundColor: '#efefef'
                        }
                        
                    ]
                }}
            />
        </div>
    )
}

export default ChartEl