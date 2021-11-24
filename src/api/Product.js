import React, {useState , useEffect } from 'react'
import axios from 'axios'
import {FaRegClock, FaStar, FaRegEnvelope, FaRegCheckCircle} from "react-icons/fa"
import {FaChevronRight} from "react-icons/fa"
import Countdown from './api/Countdown';





function Product(){

const Countdown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => 

Countdown.defaultProps={
    timerDays:10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};
    //----------------remove from here up -------------
    
    const url = 'https://fe-assignment.vaimo.net/'
    const [product, setProduct] = useState({
        loading: false,
        data: null
    })

    let content=null 

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
        }) 
        axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data
            })    
        })
    }, [url])

    if(product.loading){
        content= <loader>Loading...</loader>
    }


    if(product.data){
        content =
            <div className='app'>{
                <div className="details">
                    <div className="limg">
                        <img src="/images/drone.jpg" alt="" />
                        
                        <div className="box">
                        <div className="row">
                            <div className="top">

                            <p className="t1">Ready to Ship</p> <p className="t2"><i><FaRegCheckCircle/></i> In Stock</p>  <p className="t3"><i><FaRegCheckCircle/></i> Fast Dispatch</p>
                            </div>
                    </div>
                            <h2>{product.data.product.name} <span className="tag">{product.data.product.tags}</span></h2> 

                     <span className="rating" ><FaStar/><FaStar/><FaStar/><FaStar/> {product.data.product.reviews.rating} </span>
                     
                      <span className="review">{product.data.product.reviews.count} Reviews</span>  <span className="buyers">{product.data.product.reviews.total_buyers} buyers</span>  <br />
                     <hr />
                        </div>
                        <div className="row2">

                            <span className="pprice">R 78.50 - R 895.31</span> <span className="option">/option</span> <span className="aoption">2 Options</span> <span className="option">(min. Order)</span>
                        </div>
                        <div className="row3">
                        <br />
                        <span className="oldprice">R98.12 - R1,119.114 </span> 
                        </div>
                        <hr /> 
                        <div className="row4">
                            <img src="/images/logo.png" alt="" /> 
                            <ul1> • Free shipping up to ( $40 ) </ul1>
                        <ul2> • On time delivery guaranteed<i><FaChevronRight/></i></ul2>
                        </div>

                        <div className="row5">  
                            <p className="p">{product.data.product.discount.amount} OFF</p>
                             <p className="end">Discount ends in</p>

                        </div>
                        <div className="column">
                            <p className="op1">Options</p>
                            <p className="s1">1080p</p>
                            <p className="s2"> R833.99</p>
                               
           
                         
                        </div>
                        <div className="column2">
                             <p>4K</p>
                             <p className="s3">R895.31</p>
                         </div>
                         <div className="column3">
                             <p>{product.data.product.options.battery_accessories.label}</p>
                             <p className="s4">{product.data.product.options.battery_accessories.price.currency.symbol}{product.data.product.options.battery_accessories.price.value}</p>

                             </div>


                             <div className="footer">
                             <img src="/images/trade.svg" alt="" /> <p><b>Trade Assurance</b> protects your Alibaba.com orders</p>
                              </div>

                            <div className="footer2">
                              <p>Payments</p><img src="/images/visa.svg" alt="" /> <img src="/images/mastercard.svg" alt="" /><img src="/images/applepay.svg" alt="" />
                            </div>

                            <div className="footer3">
                              <p> Alibaba.com Logistics <p2> Inspection Solutions</p2> </p>
                            </div>
                         
                        
                        <div className="shipping-cont">
                        <div className="shipping">
                         <span className="ship">Ship to <p>{product.data.product.shipping.method.country} by {product.data.product.shipping.method.title}</p></span> 
                         <span className="cost">R {product.data.product.shipping.method.cost.value} </span> 
                         <span className="lead">Lead Time {product.data.product.shipping.lead_time.value} <img src="/images/info.png" alt="" /></span>
                         <span className="time">Shipping time {product.data.product.shipping.method.shipping_time.value} <img src="/images/info.png" alt="" /></span> 

                        <div className="buttons">

                        <button className="login">Login to Purchase</button>
                        <button className="login2"><i><FaRegEnvelope/></i> Contact the Supplier</button>
                        </div>
                        </div>
                         </div>


                     </div>
                </div>
                
            }
            </div>
          
    }

    return(
        <div>
            {content}
        </div>
    )
}









export default Product
