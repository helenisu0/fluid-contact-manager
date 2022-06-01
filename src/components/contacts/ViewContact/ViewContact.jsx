import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"




let ViewContact = () =>{

    const contacts  =  useSelector(state=>state);
    const params = useParams()

    const {id} = params
const dispatch = useDispatch();
    return (
        <>
        
            <section className="view-contact intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Contact details</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="view contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="" className=" contact-img"/>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group-item list-group-action">
                                            {
                                                 contacts.filter((contact)=> contact.id === +id).map(contact =>
                                                    (
                                                <>
                                                <ul key={id}>
                                            
                                                
                                                
                                                
                                                    
                                                       

                                                        <li>id: <span className="list-group-item list-group-item-action fw-bold"> {contact.id} </span></li>
                                                        <li>Title: <span className="list-group-item list-group-item-action fw-bold">{contact.title}</span></li>
                                                        <li>Name: <span className=" list-group-item list-group-item-action fw-bold">{contact.name}</span></li>
                                                        <li>Email: <span className="list-group-item list-group-item-action fw-bold">{contact.email}</span></li>
                                                       <li> Phone-Number: <span className="list-group-item list-group-item-action fw-bold">{contact.phoneNumber}</span></li>
                                                    

                                                        </ul>
                                                        </>)
                                                
                                                   
                                                    
                                                    
                                            
                                                
                                            )}
                                            
                                        </ul>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/lists'} className="btn btn-secondary">Back</Link>
                        </div>
                    </div>
                </div>

            </section>
        
        
        </>



    )
};
 export default ViewContact;