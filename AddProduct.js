import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProductList from './ProductList';

class AddProduct extends Component {
    constructor(props){
        super();
        this.state = {
            id:0,
            name:"",
            price:0,
            expiryDate:Date.now()
    }
}
add = (event)=>{
    event.preventDefault();
    if(this.state.id==0||this.state.name.trim().length==0||this.state.price==0){
        alert("Please fill all the fields with correct data");
        return;
    }
    console.log(this.state);
    this.props.addHandler(this.state);
    this.setState({
        id:0,
        name:"",
        price:0,
        expiryDate:Date.now()
    })

}

    render(){
        return(
            <div>
                <Form>
                    <h1>Product Registeration Form</h1>
                  <Form.Group className="mb-3" controlId="formBasicid">
                    <Form.Label>Enter Id</Form.Label>
                    <Form.Control type="number" placeholder="Enter id" value={this.state.id} 
                    onChange={(e)=>this.setState({id:e.target.value})} />
                  </Form.Group>
            
                  <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Enter Product Name</Form.Label>
                    <Form.Control type="text" placeholder="enter product name"  value={this.state.name} 
                    onChange={(e)=>this.setState({name:e.target.value})}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicid">
                    <Form.Label>Enter Product Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter id" value={this.state.price} 
                    onChange={(e)=>this.setState({price:e.target.value})} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicid">
                    <Form.Label>Enter Expiry Date</Form.Label>
                    <Form.Control type="Date" placeholder="Enter id" value={this.state.expiryDate} 
                    onChange={(e)=>this.setState({expiryDate:e.target.value})} />
                  </Form.Group>
                 
                  <Button variant="primary" type="button" onClick={this.add}>
                    Submit
                  </Button>
                </Form>
               <ProductList products={this.props.products}/>
                </div>
        )
    }
}
export default AddProduct;