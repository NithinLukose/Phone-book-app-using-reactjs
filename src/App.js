import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import AddContact from './components/addContact'
import ShowContact from './components/showContact'
import FilterContact from './components/filterContact'
import Contacts from './components/contacts'
import {initializeContacts} from './reducers/contactReducer'


const App = (props) => {
    
   useEffect(() => {
       props.initializeContacts()
   },[])
    
    
    return (
        
        <div>
            <FilterContact store={props.store}/>
            <Contacts store={props.store} />
            <AddContact store={props.store}/>
            <ShowContact store={props.store}/>
        </div>
        
    )
}

export default connect(null,{initializeContacts})(App);
