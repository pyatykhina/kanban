import React, { Component } from 'react';
import Card from '../Card'; 
import Form from '../Form'; 
import './Column.scss';

class List extends Component {
    state = {
        cards: []
    }

    fetchCards = (columnID) => {
        fetch('/api/getCards', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
                JSON.stringify({
                    columnID: columnID
                })
        })
            .then( response => {
                return response.status !== 200 ? Promise.reject(response) : response.json();
            })
            .then( result => this.setState({ cards: result }) );
    }

    componentDidMount() {
        this.fetchCards(this.props.columnID);
    }

    render() {
        const { title, columnID } = this.props;
    
        return (
            <div className='column'>
                <header className='column__header'>{title}</header>
                <ul className='column__cards'>
                    {this.state.cards.map(item => (
                        <Card title={item}/>
                    ))}
                </ul>
                <Form type='card' action='/api/addCard' columnID={columnID} />
            </div>
        )
    }
}

export default List;
