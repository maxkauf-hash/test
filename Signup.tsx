import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

export const Signup: React.FC = () => {
    return (
      <Fragment>
        <Header />
        <div className="main_content">
  <div className="login_register_wrap section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-md-10">
          <div className="login_wrap">
            <div className="padding_eight_all bg-white">
              <div className="heading_s1">
                <h3>Create an Account</h3>
              </div>
              <form className="ng-untouched ng-pristine ng-invalid">
                <div className="form-group mb-3"><input type="text" name="fullName" placeholder="Enter Your Name" className="form-control ng-untouched ng-pristine ng-invalid" ng-reflect- /></div>
                <div className="form-group mb-3"><input type="text" name="email" placeholder="Enter Your Email" className="form-control ng-untouched ng-pristine ng-invalid" ng-reflect- /></div>
                <div className="form-group mb-3"><input type="password" name="password" placeholder="Password" className="form-control ng-untouched ng-pristine ng-invalid" ng-reflect- /></div>
                <div className="form-group mb-3"><input type="password" placeholder="Confirm Password" className="form-control" /></div>
                <div className="login_footer form-group mb-3">
                  <div className="chek-form">
                    <div className="custome-checkbox"><input type="checkbox" name="checkbox" id="exampleCheckbox2" className="form-check-input" /><label htmlFor="exampleCheckbox2" className="form-check-label"><span>I agree to
                          terms &amp; Policy.</span></label></div>
                  </div>
                </div>
                <div className="form-group mb-3"><button type="submit" name="register" className="btn btn-fill-out btn-block">Register</button></div>
              </form>
              <div className="different_login"><span>
                  or</span></div>
              <ul className="btn-login list_none text-center">
                <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook" />Facebook</a></li>
                <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus" />Google</a></li>
              </ul>
              <div className="form-note text-center">Already have an account? <a><NavLink to='/signin'>Log in</NavLink></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <Footer />
    </Fragment>
)}