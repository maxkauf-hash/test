import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Checkout: React.FC = () => {
    return (
      <Fragment>
        <Header />
<div className="main_content">
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="heading_s1">
            <h4>Billing Details</h4>
          </div>
          <div className="heading_s1">
            <h4>Shipping Details</h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="order_review">
            <div className="heading_s1">
              <h4>Your Orders</h4>
            </div>
            <div className="table-responsive order_table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Blue Dress For Woman <span className="product-qty">x 2</span></td>
                    <td>$90.00</td>
                  </tr>
                  <tr>
                    <td>Lether Gray Tuxedo <span className="product-qty">x 1</span></td>
                    <td>$55.00</td>
                  </tr>
                  <tr>
                    <td>woman full sliv dress <span className="product-qty">x 3</span></td>
                    <td>$204.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>SubTotal</th>
                    <td className="product-subtotal">$349.00</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>Free Shipping</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td className="product-subtotal">$349.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="payment_method">
              <div className="heading_s1">
                <h4>Payment</h4>
              </div>
            </div>
            <a href="#" className="btn btn-fill-out btn-block">Place Order</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
    </Fragment>
)}