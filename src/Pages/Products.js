import React from 'react';
import Datatable from '../Components/Datatable';
import ProductsData from '../Database/ProductsData';
import "./Products.css"

function Products() {
    const columns = [
        "Product Name", "Description", "Product Price", "Category", "Expiry Date", "Action"] 
    return(  
    <div>
     <Datatable columns = {columns}  items = {ProductsData}/>

     </div>
     )
    }


export default Products;
