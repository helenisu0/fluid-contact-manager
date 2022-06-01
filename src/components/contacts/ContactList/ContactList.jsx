import React from "react";
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"




let ContactList = () =>{

    const contacts  =  useSelector(state=>state);
    const dispatch = useDispatch();

    

    const deleteContact = (id)=>{
        dispatch({type: "DELETE",payload:id})
        window.alert("Contact Deleted Successfully");
    }






    return (
        <>
        
        <section className="Contact-Search p-3">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Contact manager
                                <Link to={'/contacts/add'}className="btn btn-secondary ms-2"
                                ><i className="fa fa-plus-circle me-2"/> New</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-list">
            <div className="container">
                <div className="row">

                    {
                        contacts.length> 0 && 
                        contacts.map(contact =>{
                            return (
                                <div className="col-md-6 " key = {contact.id}>
                        <div className="card my-2">
                            <div className="card-body">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-md-4">
                                        <img src={contact.photoUrl} alt="" className=" contact-img" />
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-group-item list-group-action d-flex flex-row">
                                            {
                                               <>
                                                        <ul key={contact.id}>
                                                            <li className="list-group-item-action" >
                                            
                                                                <li>Title: <span className=" list-group-item-action fw-bold">{contact.title}</span></li>
                                                                <li>Name: <span className="fw-bold">{contact.name}</span></li>
                                                                <li>Email: <span className="fw-bold">{contact.email}</span></li>
                                                                <li> Phone-Number: <span className="fw-bold">{contact.phoneNumber}</span></li>
                                                            </li>


                                                        </ul>
                                                        <ul>
                                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                                <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                                    <i className="fa fa-eye" />
                                                                </Link>
                                                                <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
                                                                    <i className="fa fa-pen" />
                                                                </Link>
                                                                <button className="btn btn-secondary my-1">
                                                                    <i className="fa fa-trash" onClick={() => deleteContact(contact.id)} />
                                                                </button>

                                                            </div>
                                                        </ul>
                                                    
                                                        </>
                                                    

                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                            
                                                

                                                
                                            }
                                            
                                            
                                        </ul>
                                    </div>
                                    {/* <div className="col-md-1 d-flex flex-column align-items-center">
                                        <Link to={`/contacts/view/:id`} className="btn btn-warning my-1">
                                            <i className="fa fa-eye"/>
                                        </Link>
                                        <Link to={`/contacts/edit/${contacts.id}`} className="btn btn-primary my-1">
                                            <i className="fa fa-pen"/>
                                        </Link>
                                        <button className="btn btn-secondary my-1">
                                            <i className="fa fa-trash" onClick={()=> deleteContact(contacts.id)}/>
                                        </button>


                                    </div> */}
                                </div>
                            </div>
                            

                        </div>
                            

                    </div>
                            )
                        })
                    }
                    
                    

                </div>

            </div>


        </section>
        
        
        </>



    )
};
 export default ContactList;