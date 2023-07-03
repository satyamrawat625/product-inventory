import React from 'react';
import productData from '../data.json';
import './App.css';
import TableHeader from './components/TableHeader';


const TableRow = ({ rowData }) => {
  return (
    <tr>
      <td>{rowData.product_id}</td>
      <td>{rowData.title}</td>
      <td>{rowData.price}</td>
      <td>{rowData.sku}</td>
    </tr>
  );
};

const ProductTable = () => {
  return (
    <div>
      <h1>
        Product inventory :
      </h1>

      <img className="inventory-img" src="https://media.istockphoto.com/id/1178358038/photo/manager-man-worker-doing-stocktaking-of-product-management-in-cardboard-box-on-shelves-in.jpg?s=612x612&w=0&k=20&c=bDxwY_mDTtdEfRS6MKMZph4V82CTM0c8r0-We8eBhwg=" alt="" />
      
      <div className='table-container'>
        <table className="productTable">
          <TableHeader />
          <tbody>
            {Object.values(productData).map((item, index) => (
              <TableRow key={index} rowData={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
