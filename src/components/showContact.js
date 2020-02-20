import React from 'react';
import {connect} from 'react-redux'

const ShowContact = (props) => {
    
    const rows = () => {
        
        return props.contacts.map(contact => <li key={contact.id}>{contact.name} {contact.number}</li>)
        
    }
    
    return(
        <>
            <h3>Show Contacts</h3>
            {rows()}
        </>
        
    )
    
}
const mapStateToProps = (state) => {
    return {
        
        contacts:state.contacts,
        filter:state.filter
        
    }
}
const ConnectedShowContact = connect(mapStateToProps)(ShowContact)
export default ConnectedShowContact