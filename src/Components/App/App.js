import React, { Component } from 'react';
import Column from '../Column'; 
import Form from '../Form'; 
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Column title='План' />
                <Form type='column' />
            </div>
        )
    }
}

export default App;
