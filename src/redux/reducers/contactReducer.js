const initialState = [
    { 
        id:1,
        title:"miss",
        name:"Isu Helen",
        photoUrl:"https://robohash.org/2D1.png?set=set3",
        email:"helo@gmail.com",
        phoneNumber: "0708760",
       
        
    },
    { 
        id:2,
        title:"miss",
        name:"Isu Helen",
        photoUrl:"https://robohash.org/A2I.png?set=set2",
        email:"helen777@gmail.com",
        phoneNumber: "070876067",
    },
    
];

  

const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state,action.payload]
            return state
        case"UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id? action.payload:contact)
            state = updateState
            return state
        case "DELETE":
            const deletedContact=state.filter(contact=>contact.id !==action.payload && contact);
            return deletedContact;

        default: 
        return state;
    }


}

export default contactReducer;