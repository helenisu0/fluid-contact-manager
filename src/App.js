import React from 'react';
import './App.css';
import NavBar from'./components/navBar/NavBar';
import ContactList from './components/contacts/ContactList/ContactList';
import EditContact from './components/contacts/EditContact/EditContact';
import AddContact from './components/contacts/AddContact/AddContact'
import{Routes, Route, Navigate} from 'react-router-dom' 
import ViewContact from './components/contacts/ViewContact/ViewContact';
import { ToastContainer } from 'react-toastify';

let App = () => {
  return (
     <>
     <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path={'/'}  element={<Navigate to={'/contacts/lists'}/>}/>
        <Route path={'/contacts/lists'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:id'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:id'} element={<EditContact/>} />
      </Routes>

   
   
   
    </>
      
      

    
 
  );
}

export default App;
