import React from 'react';
import {connect} from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const FilterContact = (props) => {
    
    const handleChange = (event) => {
        props.filterChange(event.target.value)
    }
    
    return(
    
        <>
            <h3>Filter Contact</h3>
            <form>
                <input name='filter' onChange={handleChange}/> 
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
    filterChange,
}
const ConnectedFilterContact = connect(mapStateToProps,mapDispatchToProps)(FilterContact)
export default ConnectedFilterContact;