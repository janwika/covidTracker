import React from 'react'
import {ListGroup} from 'react-bootstrap';

function ListForm(props){
    return(
        <ListGroup.Item>
            <a href={"/CountryStat/" + props.props.alpha2}>{props.props.name}</a>
        </ListGroup.Item>
    )
}

export default ListForm