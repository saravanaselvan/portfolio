import React, { Component } from 'react';
import styles from './RentReceipt.module.css'
import Header from '../header/Header';
import { Helmet } from "react-helmet"
import ReceiptDoc from './ReceiptDoc';

class RentReceipt extends Component {
  state = {
    name: '',
    address: '',
    amount: '',
    from: '',
    to: '',
    ownerName: '',
    ownerPan: '',
    receipt: {}
  }

  handleInputChange = (event) => {
    const id = event.target.id;
    this.setState({
      [id]: event.target.value
    })
  }

  generateReceipt = (event) => {
    console.log(this.state);
    this.setState({
      receipt: this.state
    })
    event.preventDefault();
  }

  render() {
    return (
      <Header>      
        <Helmet>
          <title>Rent Receipt</title>
        </Helmet>
        <div>
          <form onSubmit={this.generateReceipt} className={styles.receiptForm}>
            <div className={styles.formControl}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={this.state.name} onChange={this.handleInputChange}></input>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" value={this.state.address} onChange={this.handleInputChange}></input>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="amount">Amount</label>
              <input type="text" id="amount" value={this.state.amount} onChange={this.handleInputChange}></input>
            </div>        
            <div className={styles.formControl}>
              <label htmlFor="from">From</label>
              <input type="text" id="from" value={this.state.from} onChange={this.handleInputChange}></input>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="To">To</label>
              <input type="text" id="to" value={this.state.to} onChange={this.handleInputChange}></input>
            </div>        
            <div className={styles.formControl}>
              <label htmlFor="ownerName">Owner Name</label>
              <input type="text" id="ownerName" value={this.state.ownerName} onChange={this.handleInputChange}></input>
            </div>                
            <div className={styles.formControl}>
              <label htmlFor="ownerPan">Owner PAN</label>
              <input type="text" id="ownerPan" value={this.state.ownerPan} onChange={this.handleInputChange}></input>
            </div>        
            <div className={styles.formControl}>
              <label></label>
              <button type="submit">Submit</button>
              <button onClick={() => window.print()}>Print</button>
            </div>  
          </form>
          <ReceiptDoc receipt={this.state.receipt}></ReceiptDoc>
        </div>   
      </Header>
    )
  }
}

export default RentReceipt;