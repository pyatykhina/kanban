import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize'
import './Form.scss';

import addImage from '../../images/add.svg'
import crossImage from '../../images/cross.svg'

class Form extends Component {
    showInput = e => {
        e.preventDefault();
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'flex';
    }

    hideInput = e => {
        e.preventDefault();
        e.target.parentNode.parentNode.parentNode.style.display = 'none';
        e.target.parentNode.parentNode.parentNode.previousElementSibling.style.display = 'flex';
    }

    render() {
        const { type } = this.props;
        let openButton, placeholder, addButton;
        
        type === 'column' ? openButton = 'Добавить еще одну колонку' : openButton = 'Добавить еще одну карточку'
        type === 'column' ? placeholder = 'Введите название колонки' : placeholder = 'Введите название карточки'
        type === 'column' ? addButton = 'Добавить колонку' : addButton = 'Добавить карточку'

        return (
            <div>
                <button className='form__button' onClick={this.showInput}>
                    <img src={addImage} alt='add' className='form__button-image' />
                    <div className='form__button-text'>{openButton}</div>
                </button>
                <form className='form__form'>
                    { type === 'column'
                        ? <input 
                            className='form__form-input'
                            placeholder={placeholder}
                            type='text'
                        />
                        : <Textarea 
                            style={{ minHeight: '54px' }}
                            className='form__form-input'
                            placeholder={placeholder}
                            type='text'
                        />
                    }
                    <div className='form__form-buttons'>
                        <button className='form__form-buttons-add'>{addButton}</button>
                        <button className='form__form-buttons-close' onClick={this.hideInput}>
                            <img src={crossImage} alt='close'/>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
