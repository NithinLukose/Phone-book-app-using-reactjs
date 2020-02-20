import React from 'react';
import {connect} from 'react-redux'
import contactService from '../services/contacts'
import {createContact} from '../reducers/contactReducer'

const AddContact = (props) => {
    
    const addContact = async (event) => {
        
        event.preventDefault()
        const name = event.target.name.value;
        event.target.name.value = "";
        const number = event.target.number.value;
        event.target.number.value = "";
        const content = {name:name,number:number}
        
        props.createContact(content)
        
    }
    
    return(
        
        <>
            <h3>Add contact </h3>
            <form onSubmit={addContact}>

                Name : <input name='name' />
                <br />
                <br />
                Number : <input name='number' />
                <br />
                <br />
                <input type='submit' value='submit'/>
            </form>
        </>
    
    )
    
}
const mapStateToProps = (state) => {
    return {
        
        contacts:state.contacts,
        filter:state.filter
        
    }
} 
const mapDispatchToProps = {
    createContact,
}
const ConnectedAddContact = connect(mapStateToProps,mapDispatchToProps)(AddContact)
export default ConnectedAddContact;