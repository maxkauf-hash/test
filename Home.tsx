import React, { Fragment, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getCategories } from '../api/entity'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
    <div id="carouselExampleControls" data-bs-ride="carousel" className="carousel slide carousel-fade light_arrow">
      <div className="carousel-inner">
        <div className="carousel-item active background_bg" data-img-src="/assets/files/115347265551009984873978960561874772983192541684755242040.png" style={{backgroundImage: 'url( /assets/files/115347265551009984873978960561874772983192541684755242040.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{animationDelay: '0.5s'}}>50% off in all products</h5>
                    <h2 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationDelay: '0.5s'}}>Man Fashion</h2>
                    <a data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:3000/" style={{ animationDelay: '1.5s'}}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item background_bg" data-img-src="/assets/files/17099405955142852076105633054671075224313121684753428765.png" style={{ backgroundImage: 'url( /assets/files/17099405955142852076105633054671075224313121684753428765.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{ animationDelay: '0.5s'}}>Get up to 50% off Today Only!
                    </h5>
                    <h2 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{animationDelay: '0.5s'}}>Woman Fashion</h2>
                    <a data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:3000/" style={{ animationDelay: '1.5s'}}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item background_bg" data-img-src="/assets/files/2850766279112079091504712247552853779750349121684753505113.png" style={{ backgroundImage: 'url( /assets/files/2850766279112079091504712247552853779750349121684753505113.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{ animationDelay: '0.5s'}}>Taking your Viewing Experience to
                      Next Level</h5>
                    <h2 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationDelay: '0.5s'}}>Summer Sale</h2>
                    <a data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:3000/" style={{ animationDelay: '1.5s'}}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item background_bg" data-img-src="/assets/files/80746066632713998236489572054461980464175761684755285905.png" style={{ backgroundImage: 'url( /assets/files/80746066632713998236489572054461980464175761684755285905.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{ animationDelay: '0.5s'}}>Taking your Viewing Experience to
                      Next Level</h5>
                    <h2 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationDelay: '0.5s'}}>Summer Sale</h2>
                    <a data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:3000/" style={{ animationDelay: '1.5s'}}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><a href="#carouselExampleControls" role="button" data-bs-slide="prev" className="carousel-control-prev"><i className="ion-chevron-left" /></a>
      <a href="#carouselExampleControls" role="button" data-bs-slide="next" className="carousel-control-next"><i className="ion-chevron-right" /></a>
    </div>
  </div>
  <div className="main_content">
    <div className="section pb_20">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single_banner">
              <img alt="shop_banner_img1" src="/assets/files/134985227484251691648652568177479961559477851684757880896.png" />
              <div className="single_banner_info">
                <h5 className="single_bn_title1">Super Sale</h5>
                <h3 className="single_bn_title">New Collection</h3><a className="single_bn_link" href="http://localhost:4400/">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_banner"><img alt="shop_banner_img1" src="/assets/files/1231816139442978863631268994779183882351500061684757886381.png" />
              <div className="single_banner_info">
                <h5 className="single_bn_title1">Super Sale</h5>
                <h3 className="single_bn_title">New Collection</h3><a className="single_bn_link" href="http://localhost:4400/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section small_pt pb_70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="heading_stext-center">
              <h2>Exclusive Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-style1">
              <ul role="tablist" className="nav nav-tabs justify-content-center">
                <li className="nav-item"><a id="arrival-tab" data-bs-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true" className="nav-link active">New
                    Arrival</a></li>
                <li className="nav-item"><a id="sellers-tab" data-bs-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false" className="nav-link">Best Sellers</a>
                </li>
                <li className="nav-item"><a id="featured-tab" data-bs-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false" className="nav-link">Featured</a>
                </li>
                <li className="nav-item"><a id="special-tab" data-bs-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false" className="nav-link">Special Offer
                  </a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="arrival" role="tabpanel" aria-labelledby="arrival-tab" className="tab-pane fade show active">
                <div className="row shop_container">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/970670668041335927385290724653240714148366921684565574162.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,bikini-unicolore-cte" href="/product/bikini-unicolore-ctel-shop"> Bikini unicolore
                            côtelé</a></h6>
                        <div className="product_price"><span className="price">$28.24</span><del>$241.5</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: '80%' }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html">
                          <img alt="product_img1" src="/assets/files/culottes/culotte_3/6138170893214881132536005127536132168491807951684087224669.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-blocs-de-cou" href="/product/culotte-blocs-de-couleurs-en-dentelle-jstore">
                            Culotte à blocs de couleurs en dentelle</a></h6>
                        <div className="product_price"><span className="price">$54.95</span><del>$202.57</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_9/116945623386141314594418897879593148825527931684087225230.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-unicolore-sa" href="/product/culotte-unicolore-sans-couture-category"> Culotte
                            unicolore (sans couture)</a></h6>
                        <div className="product_price"><span className="price">$44.54</span><del>$201.32</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_7/825380258783085919054835307976332473139779511684087224936.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-en-dentelle-" href="/product/culotte-en-dentelle-mudey"> Culotte en
                            dentelle</a></h6>
                        <div className="product_price"><span className="price">$17.17</span><del>$277.59</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_5/36851533762117856286455670026456984987161761684087224828.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-en-dentelle-" href="/product/culotte-en-dentelle-espero"> Culotte en
                            dentelle</a></h6>
                        <div className="product_price"><span className="price">$23.91</span><del>$221.82</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_4/87087411019387380483560199609827534551691041684087224752.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-unicolore-fe" href="/product/culotte-unicolore-femme-sans-couture-akpoli">
                            Culotte unicolore femme (sans couture)</a></h6>
                        <div className="product_price"><span className="price">$56.07</span><del>$223.66</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_2/64690629656996101166169787112869964617448491684087224479.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,tanga-unicolore" href="/product/tanga-unicolore"> Tanga unicolore</a></h6>
                        <div className="product_price"><span className="price">$38.84</span><del>$292.94</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_8/10518988473111520886581236853833613928085898971684087225041.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-en-dentelle" href="/product/culotte-en-dentelle"> Culotte en dentelle</a>
                        </h6>
                        <div className="product_price"><span className="price">$58.43</span><del>$291.58</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sellers" role="tabpanel" aria-labelledby="sellers-tab" className="tab-pane fade">
                <div className="row shop_container">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_6/718925804599854045602279596111987072178257711684087224869.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte unicolore croisé</a></h6>
                        <div className="product_price"><span className="price">$33.85</span><del>$263.31</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_10/716790906878520636144466055992933868763960391684087225409.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte festonné transparent en dentelle</a></h6>
                        <div className="product_price"><span className="price">$32.88</span><del>$247.78</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_7/524333185019172646736797295488095127403448401684087224592.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe noire brillante</a></h6>
                        <div className="product_price"><span className="price">$14.6</span><del>$216.12</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_13/244705445388511646473689254487159474772929841684087225813.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte ourlet en dentelle</a></h6>
                        <div className="product_price"><span className="price">$45.83</span><del>$211.75</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_16/219796605827256341454889828840756921910276721684087226245.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte avec tulle</a></h6>
                        <div className="product_price"><span className="price">$23.23</span><del>$290.35</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_14/79890431042639530689694655280859983299747611684087225987.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte à broderie avec tulle en satin</a></h6>
                        <div className="product_price"><span className="price">$25.13</span><del>$265.45</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_18/973835520018210114832037999703944878615394871684087226479.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte unicolore avec dentelle</a></h6>
                        <div className="product_price"><span className="price">$20.24</span><del>$283.3</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/culottes/culotte_19/12319169255412618291481233907787091276317589281684087226606.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Culotte à imprimé floral en dentelle</a></h6>
                        <div className="product_price"><span className="price">$39.97</span><del>$203.26</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="featured" role="tabpanel" aria-labelledby="featured-tab" className="tab-pane fade">
                <div className="row shop_container">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,culotte-en-dentelle-" href="/product/culotte-en-dentelle-losange-tulle"><img alt="product_img1" src="/assets/files/culottes/culotte_11/822238303084799851607058697164904282250918561684087225541.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-en-dentelle-" href="/product/culotte-en-dentelle-losange-tulle"> Culotte en
                            dentelle losange à tulle</a></h6>
                        <div className="product_price"><span className="price">$17.92</span><del>$252.36</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,culotte-en-dentelle" href="/product/culotte-en-dentelle"><img alt="product_img1" src="/assets/files/culottes/culotte_12/393523161307892554865592327794992384666588341684087225707.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,culotte-en-dentelle" href="/product/culotte-en-dentelle"> Culotte en dentelle</a>
                        </h6>
                        <div className="product_price"><span className="price">$52.49</span><del>$213.56</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,jupe-unicolore-taill" href="/product/jupe-unicolore-taille-haute-drap-sans-ceinture"><img alt="product_img1" src="/assets/files/jupes/jupe_2/10151059111915286178902940342065228571716323801684087226812.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,jupe-unicolore-taill" href="/product/jupe-unicolore-taille-haute-drap-sans-ceinture">
                            Jupe unicolore taille haute drapé (sans ceinture)</a></h6>
                        <div className="product_price"><span className="price">$25.91</span><del>$261.58</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,jupe-avec-plis" href="/product/jupe-avec-plis"><img alt="product_img1" src="/assets/files/jupes/jupe_3/361051702921102689190432869700601762290308091684087226905.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,jupe-avec-plis" href="/product/jupe-avec-plis"> Jupe avec plis</a></h6>
                        <div className="product_price"><span className="price">$55.64</span><del>$260.4</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,jupe-fendue-taille-h" href="/product/jupe-fendue-taille-haute"><img alt="product_img1" src="/assets/files/jupes/jupe_4/9620511738310665153261028886432442434444644041684087226948.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,jupe-fendue-taille-h" href="/product/jupe-fendue-taille-haute"> Jupe fendue taille
                            haute</a></h6>
                        <div className="product_price"><span className="price">$55.54</span><del>$210.99</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,jupe-moulante-unicol" href="/product/jupe-moulante-unicolore"><img alt="product_img1" src="/assets/files/jupes/jupe_5/75656889720728358846366110611458156203532341684087227089.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,jupe-moulante-unicol" href="/product/jupe-moulante-unicolore"> Jupe moulante
                            unicolore</a></h6>
                        <div className="product_price"><span className="price">$60.75</span><del>$286.85</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,jupe-patineuse-zippe" href="/product/jupe-patineuse-zippe"><img alt="product_img1" src="/assets/files/jupes/jupe_6/548888596739029605107873728155296577801493901684087227155.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,jupe-patineuse-zippe" href="/product/jupe-patineuse-zippe"> Jupe patineuse zippée</a>
                        </h6>
                        <div className="product_price"><span className="price">$47.73</span><del>$243.3</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a ng-reflect-router-link="/,product,jupe-droite-en-vichy" href="/product/jupe-droite-en-vichy-zipp"><img alt="product_img1" src="/assets/files/jupes/jupe_8/80821892020121611584731665850940945791160821684087227232.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a ng-reflect-router-link="/,product,jupe-droite-en-vichy" href="/product/jupe-droite-en-vichy-zipp"> Jupe droite en vichy
                            zippé</a></h6>
                        <div className="product_price"><span className="price">$25.78</span><del>$281.38</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="special" role="tabpanel" aria-labelledby="special-tab" className="tab-pane fade">
                <div className="row shop_container">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_9/3173273343910765018722650935896721963486558051684087227442.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe crayon taille haute en dentelle</a></h6>
                        <div className="product_price"><span className="price">$57.49</span><del>$209.37</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_10/524653477845911210422131276651247578029662051684087227597.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe plissée fleuri à taille froncée</a></h6>
                        <div className="product_price"><span className="price">$11.94</span><del>$219.28</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_11/1451201977371506193909225457730933602286799421684087227869.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe taille haute à imprimé tacheture</a></h6>
                        <div className="product_price"><span className="price">$41.16</span><del>$207.89</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_12/136707611525619073042115678929305337482321241684087227967.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe courte unicolore à œillets</a></h6>
                        <div className="product_price"><span className="price">$55.47</span><del>$273.34</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_13/8587721751812044915236772880705449857816544791684087228092.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe trapèze avec imprimé floral et nœud</a></h6>
                        <div className="product_price"><span className="price">$46.77</span><del>$230.39</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_14/673993384631424122014242197518485049644030101684087228136.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe crayon à imprimé géométrique zippé</a></h6>
                        <div className="product_price"><span className="price">$29.57</span><del>$215.78</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_15/5738579584111282483467033919065902821452135221684087228194.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe à imprimé floral à taille froncée</a></h6>
                        <div className="product_price"><span className="price">$55.45</span><del>$213.38</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product">
                      <div className="product_img"><a href="shop-product-detail.html"><img alt="product_img1" src="/assets/files/jupes/jupe_16/1264531120533832328596494031926895568308444171684087228233.webp" /></a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                            </li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                            <li><a href="#"><i className="icon-heart" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">
                            Jupe taille haute à imprimé floral croisé à nœud</a></h6>
                        <div className="product_price"><span className="price">$16.05</span><del>$204.01</del>
                          <div className="on_sale"><span>35% Off</span></div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div><span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer />
    </Fragment>
  )
}
