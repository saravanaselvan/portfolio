import React from 'react';

import styles from "./ReceiptDoc.module.css"

const ReceiptDoc = (props) => {
  const { name, amount, address, ownerName, ownerPan, from, to } = props.receipt.name ? props.receipt : {};
  return (
    <div className={styles.container}>
      <div className={styles.title}>RENT RECEIPT</div>
      <section className={styles.description}>
        Received from <strong>{name}</strong> a sum of <strong>Rs. {amount} </strong>(Rupees ) towards rent for the period from <strong>{from}</strong> to <strong>{to}</strong> for the 
        property at <strong>{address}</strong>
      </section>
      <section className={styles.ownerDetails}>
        <section className={styles.ownerName}>
          <div>
          Name of the owner: <strong>{ownerName}</strong>
          </div>
          <div>
          PAN of the owner: {ownerPan}
          </div>
        </section>
        <section className={styles.revenueStamp}>
          <div className={styles.stampBox}>Revenue Stamp</div>
          <div className={styles.signature}>(Signature of the Owner)</div>
        </section>
      </section>
    </div>
  )
}

export default ReceiptDoc;