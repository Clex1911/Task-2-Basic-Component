import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PopUptrash from '../image/trash1.png'
import "../Components/Datatable.css"

const Datatable = (props) => {

  return (
    <table clas ="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> 
        <tr>
          {props.columns.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.items.map((product) => (
          <tr key={product.id}>
            <td scope="col" class="px-6 py-3"> 
                <Link to={`/DetailPage/${product.id}`}>{product.name}</Link></td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.expiryDate}</td>
            <td>
            <Popup
                trigger={
                  <button className="button">
                    <img src={PopUptrash} className="button-image" />
                    Delete
                  </button>
                }
                position="left center"
              >
                <div className="popup-box">
                  <img src={PopUptrash} className="popupImage" />
                  <p className="bold-text">
                    Are you sure to delete <b>{product.name}</b>
                  </p>
                  <button className="popupButton">Yes</button>
                  <button className="popupButton">No</button>
                </div>
              </Popup>
              {/* <button>Delete</button> */}
            </td>
          </tr>
        ))}
      </tbody>
      <tbody>
        {props.items.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {/* <td>
              <button>Delete</button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>

    
  );
};

export default Datatable;
