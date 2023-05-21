import React from 'react';
import { useNavigate } from 'react-router-dom';

const  Products = () => {
    const Navigate = useNavigate()
     return(  
    <div>
        <h1>Homepage</h1>
        <button onClick={() => Navigate('/Products')}>Products</button>
        <td></td>
        <button onClick={() => Navigate('/Users')}>Users</button>
     </div>
     )
    }
     

export default Products;
