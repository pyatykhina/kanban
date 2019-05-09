import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    render() {
        const { text } = this.props;

        return (
            <div className='card'>{text}</div>
        )
    }
}

export default Card;