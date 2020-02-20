import React from 'react'
import {connect} from 'react-redux'
import Contact from './contact'

const Contacts = (props) => {
    
    const {contacts,filter} = props;
    
    const contactsToShow = () => {
        if(filter){
            return contacts.filter(contact=>contact.name.toLowerCase().search(filter)>=0)
        }
        return []
        
    }
    return(
    
        <ul>
            
            {contactsToShow().map(contact=><Contact key={contact.id} name = {contact.name} />)}
        
        </ul>
    
    )
    
}
const mapStateToProps = (state) => {
    return {
        
        contacts:state.contacts,
        filter:state.filter
        
    }
}
const ConnectedContacts = connect(mapStateToProps)(Contacts)
export default ConnectedContacts