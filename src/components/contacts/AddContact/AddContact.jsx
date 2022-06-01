import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import{useNavigate} from "react-router-dom"
import {toast} from "react-toastify"



const AddContact = ({}) =>
{
    const [contactDetails, setContactDetails] = useState({title:"", name:"", photoUrl:"",email:"",phoneNumber:""})
   
    const contacts = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleContactInput = (e) => {
      setContactDetails({...contactDetails, [e.target.name]:e.target.value})
    } 

  const handleContactStorage = (e) => 
        {
            e.preventDefault();
            let {title,name,photoUrl, email,phoneNumber} = contactDetails

            let isContactExist = contacts.find(
                (contact) => contact.phoneNumber === parseInt(phoneNumber)
            );

    

            if (!title || !name || !photoUrl ||!email || !phoneNumber)
                {
                
                    // return toast.error("fill in all fields");
                    window.alert("Field incomplete");
                    return
                }

            
                else if(isContactExist)
                        {
                            window.alert("Contact exists");
                            return 
                        } 

                        else
                        {
                            const data = 
                            { id:contacts[contacts.length-1].id + 1,
                                title,
                                name,
                                email,
                                phoneNumber
                            }
                        dispatch({type:"ADD_CONTACT", payload:data})
                        window.alert("Contact Saved")
                        navigate("/contacts/lists")

        }
       
       
    }
    
     

    return ( 
        <>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-secondary fw-bold">Create Contact</p>
                            <p className="fst-italic">Fill in the details below</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={handleContactStorage}>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="title" placeholder="Title"  onChange={handleContactInput} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleContactInput} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="photoUrl" placeholder="PhotoUrl" onChange={handleContactInput} />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" name="email" placeholder="Email"onChange={handleContactInput} />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" name="phoneNumber" placeholder="PhoneNumber" onChange={handleContactInput} />
                                </div>
                                
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success"  />
                                    <Link  to={'/contacts/lists'} className="btn btn-secondary ms-2">Cancel</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        
        
        </>



    )
};


export default AddContact;