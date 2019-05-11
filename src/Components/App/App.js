import React, { Component } from 'react';
import Column from '../Column'; 
import Form from '../Form'; 
import './App.scss';

class App extends Component {
    state = {
        columns: []
    }

    fetchColumns = () => {
        fetch('/api/getColumns', { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( response => {
                return response.status !== 200 ? Promise.reject(response) : response.json();
            })
            .then( result => this.setState({ columns: result }) );
    }

    componentDidMount() {
        this.fetchColumns();
    }

    render() {
        return (
            <div className='app'>
                <ul className='app__list'>
                    {this.state.columns.map(item => (
                        <Column title={item.column} columnID={item._id} />
                    ))}
                </ul>
                <Form type='column' action='/api/addColumn' />
            </div>
        )
    }
}

export default App;
