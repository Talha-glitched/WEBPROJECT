import React, { useState } from 'react';
import '../components/orders.css';
const Orders = ({ products, onUpdateProduct }) => {
  const [editedProducts, setEditedProducts] = useState(products);

  const handleProductChange = (productId, field, value) => {
    const updatedProducts = editedProducts.map((product) => {
      if (product.id === productId) {
        return { ...product, [field]: value };
      }
      return product;
    });
    setEditedProducts(updatedProducts);
  };

  const saveChanges = () => {
    onUpdateProduct(editedProducts);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {editedProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <label>Title: </label>
          <input
            type="text"
            value={product.title}
            onChange={(e) => handleProductChange(product.id, 'title', e.target.value)}
          />
          <br />
          <label>Price: </label>
          <input
            type="number"
            value={product.Price}
            onChange={(e) => handleProductChange(product.id, 'Price', e.target.value)}
          />
        </div>
      ))}
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default Orders;









// import "./orders.css";

// function Orders() {
//   return (
//     <>
//       <table border="1">
//         <thead>
//             <tr>
//                 <th>OrderID</th>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>1001</td>
//                 <td>Product A</td>
//                 <td>$10.00</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1002</td>
//                 <td>Product B</td>
//                 <td>$15.50</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1003</td>
//                 <td>Product C</td>
//                 <td>$20.00</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1004</td>
//                 <td>Product D</td>
//                 <td>$12.50</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1005</td>
//                 <td>Product E</td>
//                 <td>$18.75</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1006</td>
//                 <td>Product F</td>
//                 <td>$22.00</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1007</td>
//                 <td>Product G</td>
//                 <td>$14.25</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1008</td>
//                 <td>Product H</td>
//                 <td>$30.50</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             <tr>
//                 <td>1009</td>
//                 <td>Product I</td>
//                 <td>$25.00</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
//     </>
//   );
// }

// export default Orders;
