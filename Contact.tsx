import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Contact: React.FC = () => {
  return (
    <Fragment>
      <Header />
<div className="main_content">
  {/* START SECTION CONTACT */}
  <div className="section pb_70">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className="contact_wrap contact_style3">
            <div className="contact_icon">
              <i className="linearicons-map2" />
            </div>
            <div className="contact_text">
              <span>Address</span>
              <p />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="contact_wrap contact_style3">
            <div className="contact_icon">
              <i className="linearicons-envelope-open" />
            </div>
            <div className="contact_text">
              <span>Email Address</span>
              <a href="mailto:"> </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="contact_wrap contact_style3">
            <div className="contact_icon">
              <i className="linearicons-tablet2" />
            </div>
            <div className="contact_text">
              <span>Phone</span>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END SECTION CONTACT */}
  {/* START SECTION CONTACT */}
  <div className="section pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading_s1">
            <h2>Get In touch</h2>
          </div>
          <p className="leads">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa
            enim. Nullam id varius nunc id varius nunc.</p>
          <div className="field_form">
            <form method="post" name="enq">
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <input required placeholder="Enter Name *" id="first-name" className="form-control" name="name" type="text" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input required placeholder="Enter Email *" id="email" className="form-control" name="email" type="email" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input required placeholder="Enter Phone No. *" id="phone" className="form-control" name="phone" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input placeholder="Enter Subject" id="subject" className="form-control" name="subject" />
                </div>
                <div className="form-group col-md-12 mb-3">
                  <textarea required placeholder="Message *" id="description" className="form-control" name="message" rows={4} defaultValue={""} />
                </div>
                <div className="col-md-12 mb-3">
                  <button type="submit" title="Submit Your Message!" className="btn btn-fill-out" id="submitButton" name="submit" value="Submit">Send Message</button>
                </div>
                <div className="col-md-12 mb-3">
                  <div id="alert-msg" className="alert-msg text-center" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END SECTION CONTACT */}
</div>
<Footer />
</Fragment>
  )}