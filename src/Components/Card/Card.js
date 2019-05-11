import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    render() {
        const { title } = this.props;

        return (
            <div className='card'>{title}</div>
        )
    }
}

export default Card;