import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

let EditContact = () =>{
    const [title, setTitle] = useState("")
    const [name, setName]=useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [email, setEmail]=useState("")
    const [phoneNumber, setPhoneNumber]=useState("")


    const {id} = useParams();
    const contacts = useSelector(state=>state);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    // const handleContactInput = (e) => {
    //     setContactDetails({...contactDetails, [e.target.name]:e.target.value})
    //   } 

    useEffect(()=>{
        if(currentContact){
            setTitle(currentContact.title)
            setName(currentContact.name)
            setPhotoUrl(currentContact.photoUrl)
            setEmail(currentContact.email)
            setPhoneNumber(currentContact.phoneNumber)

        }
    }, [currentContact])

    const handleContactStorage = (e) => 
    
    
        {
            e.preventDefault();

            

            let isContactExist = contacts.find(
                (contact) => contact.id !== parseInt(id) && contact.phoneNumber===parseInt(phoneNumber)
            );

    

            if (!email || !phoneNumber || !name)
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
                            { id:parseInt(id),//contacts[contacts.length-1].id + 1,
                                title,
                                name,
                                photoUrl,
                                email,
                                phoneNumber
                            }
                        dispatch({type:"UPDATE_CONTACT", payload:data})
                        window.alert("Contact updated")
                        navigate("/contacts/lists")

        }
       
       
    }

    
   




    
    return ( 
        <>
            <section className="Edit contact p-3">
                <div className="container">
                    {currentContact?(
                    <>
                
                        <div className="row">
                            <div className="col">
                                <p className="h4 text-secondary fw-bold">Edit Contact with id:{id}</p>
                                <p className="fst-italic">Fill in the details below</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <form onSubmit={handleContactStorage} >
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Photo Url" value={photoUrl} onChange={e=>setPhotoUrl(e.target.value)}/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="number" className="form-control" placeholder="Phone Number" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-success" value="Update"/>
                                        <Link  to={'/contacts/lists'} className="btn btn-primary ms-2">Cancel</Link>
                                    </div>

                                </form>
                            </div>

                            <div className="col-md-6">
                                <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="" className="contact-img"/>

                            </div>
                        </div>
                        </>
                        ):(<h1 className="display-3 my-6  text-center">Contact with id {id} does not exist</h1>)}
                </div>

            </section>
        </>
    
    




    )
};
 export default EditContact;