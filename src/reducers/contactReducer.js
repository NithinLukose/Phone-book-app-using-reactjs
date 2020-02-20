import contactService from '../services/contacts'
const contactReducer = (state = [],action) => {
    
   // console.log(state);
    switch(action.type){
        case 'NEW_CONTACT':
            return [...state, action.data]
            
        case 'INIT_CONTACTS':
            return action.data
        default:
            return state;
    }
    
    
}


export const createContact = (content) => {
    
    return async dispatch => {
        
        const contact = await contactService.createNew(content)
        dispatch({
            type:'NEW_CONTACT',
            data:{name:contact.name,number:contact.number,id:contact.id}
        })
        
        
    }
    
}
export const initializeContacts = (contacts) => {
    
    return async dispatch => {
        const contacts = await contactService.getAll()
        dispatch({
            type : 'INIT_CONTACTS',
            data : contacts
        })
        
    }
    
}

export default contactReducer;