import React, { Component } from 'react';
import Card from '../Card'; 
import Form from '../Form'; 
import './Column.scss';

class List extends Component {
    render() {
        const { title } = this.props;
    
        return (
            <div className='column'>
                <header className='column__header'>{title}</header>
                <ul className='column__cards'>
                    <Card text='Таск' />
                </ul>
                <Form type='card'/>
            </div>
        )
    }
}

export default List;
