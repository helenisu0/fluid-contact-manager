import React from "react";
import {Link} from 'react-router-dom';

let NavBar = () =>{
    return (
        <>
        
      <nav className="navbar navbar-dark  navbar-expand-sm"> 

            <div className="container">

                <Link to={'/'} className="navbar-brand">
                
                <i className="fa fa-navicon me-3"/>Fluid Contact
                </Link>

               <form className="row">
                    <div className="col">
                        <div className="mb-2">
                            <input  type="text" className="form-control" placeholder="search names"/>
                            
                        </div>
                    </div>

                    <div className="col">
                        <div className="mb-2">
                            <input  type="submit" className="btn btn-outline-dark bg-light text-dark" value="search"/>
                        </div>
                    </div>
               </form>
            </div>
      
      
       </nav>
        
        
        </>



    )
};
 export default NavBar;