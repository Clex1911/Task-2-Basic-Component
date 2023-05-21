import React from 'react';
import Datatable from '../Components/Datatable';
import UsersData from '../Database/UsersData';

function Users() {
    const columns = [
        "Username", "Email", "Action"] 
    return(  
    <div>
     <Datatable columns = {columns}  items = {UsersData}/>
     </div>
     )
}

export default Users;
