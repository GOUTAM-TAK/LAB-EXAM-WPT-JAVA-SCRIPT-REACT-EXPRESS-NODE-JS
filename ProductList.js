import React from 'react'
//import BookService from '../BookService/BookService'
import Table from 'react-bootstrap/Table';
export default function ProductList(props) {
  
  return (
    <div>
    <div>Display Products</div>
    <table striped bordered hover variant="dark" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Title</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {props.products.map((product,index) =>
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.expiryDate}</td>
                    
                </tr>
            )}
        </tbody>
    </table>
    </div>
  )
}
