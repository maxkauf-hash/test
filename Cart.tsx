import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

export const Cart: React.FC = () => {
    return (
      <Fragment>
        <Header />
        <div className="main_content">
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive shop_cart_table">
            <table className="table">
              <thead>
                <tr>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/culottes/culotte_5/36851533762117856286455670026456984987161761684087224828.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Culotte en dentelle</a></td>
                  <td data-title="Price" className="product-price">23.91</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity"><input type="button" defaultValue="-" className="minus" /><input type="text" name="quantity" title="Qty" className="qty" /><input type="button" defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    167,37&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/culottes/culotte_9/116945623386141314594418897879593148825527931684087225230.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Culotte unicolore (sans couture)</a></td>
                  <td data-title="Price" className="product-price">44.54</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity"><input type="button" defaultValue="-" className="minus" /><input type="text" name="quantity" title="Qty" className="qty" /><input type="button" defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    44,54&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/culottes/culotte_7/825380258783085919054835307976332473139779511684087224936.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Culotte en dentelle</a></td>
                  <td data-title="Price" className="product-price">17.17</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity">
                      <input type="button" defaultValue="-" className="minus" />
                      <input type="text" name="quantity" title="Qty" className="qty" />
                      <input type="button" defaultValue="+" className="plus" />
                    </div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    51,51&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/970670668041335927385290724653240714148366921684565574162.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Bikini unicolore côtelé</a></td>
                  <td data-title="Price" className="product-price">28.24</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity"><input type="button" defaultValue="-" className="minus" /><input type="text" name="quantity" title="Qty" className="qty" /><input type="button" defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    56,48&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/culottes/culotte_4/87087411019387380483560199609827534551691041684087224752.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Culotte unicolore femme (sans couture)</a></td>
                  <td data-title="Price" className="product-price">56.07</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity"><input type="button" defaultValue="-" className="minus" /><input type="text" name="quantity" title="Qty" className="qty" /><input type="button" defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    112,14&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/culottes/culotte_2/64690629656996101166169787112869964617448491684087224479.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Tanga unicolore</a></td>
                  <td data-title="Price" className="product-price">38.84</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity"><input type="button" defaultValue="-" className="minus" /><input type="text" name="quantity" title="Qty" className="qty" /><input type="button" defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    116,52&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a><img width={50} alt="product1" src="/assets/files/culottes/culotte_8/10518988473111520886581236853833613928085898971684087225041.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>Culotte en dentelle</a></td>
                  <td data-title="Price" className="product-price">58.43</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity"><input type="button" defaultValue="-" className="minus" /><input type="text" name="quantity" title="Qty" className="qty" /><input type="button" defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                    58,43&nbsp;€ </td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="medium_divider" />
          <div className="divider center_icon"><i className="ti-shopping-cart-full" /></div>
          <div className="medium_divider" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" />
        <div className="col-md-6">
          <div className="border p-3 p-md-4">
            <div className="heading_s1 mb-3">
              <h6>Cart Totals</h6>
            </div>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="cart_total_label">Cart Subtotal</td>
                    <td className="cart_total_amount">606,99&nbsp;€</td>
                  </tr>
                  <tr>
                    <td className="cart_total_label">Shipping</td>
                    <td className="cart_total_amount">Free Shipping</td>
                  </tr>
                  <tr>
                    <td className="cart_total_label">Total</td>
                    <td className="cart_total_amount"><strong>606,99&nbsp;€</strong></td>
                  </tr>
                </tbody>
              </table>
            </div><a className="btn btn-fill-out"><NavLink to='/checkout'>Proceed To CheckOut</NavLink></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        <Footer />
    </Fragment>
)}