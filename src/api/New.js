import React, {useState , useEffect } from 'react'
import axios from 'axios'
import {FaRegClock, FaStar, FaRegEnvelope, FaRegCheckCircle, FaCoffee} from "react-icons/fa"
import {FaChevronRight} from "react-icons/fa"
import Cliploader from "react-spinners/ClipLoader"

//import Countdown from './api/Countdown';





function New(){

 
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
        content= <p className="load">Getting Coffee ...</p>
    }


    if(product.data){
        content =
            <div className='app'>{
                <div className="columns">
                    <img src="/images/drone.jpg" alt="" />

                        <div className="col2"> 
                            <div className="top">
                            <p className="t1">Ready to Ship</p> <p className="t2"><i><FaRegCheckCircle/></i> In Stock</p>  <p className="t3"><i><FaRegCheckCircle/></i> Fast Dispatch</p>
                            </div>
                        <div className="name">
                            <h2>{product.data.product.name} <span className="tag">{product.data.product.tags}</span></h2> 
                        </div>
                        <div className="review">
                            <span className="rating" ><FaStar/><FaStar/><FaStar/><FaStar/> {product.data.product.reviews.rating} </span>
                            <span className="review">{product.data.product.reviews.count} Reviews</span>  
                            <span className="buyers">{product.data.product.reviews.total_buyers} buyers</span>
                        </div>
                        <div className="row3">
                            <span className="pprice">R 78.50 - R 895.31</span> 
                            <span className="option">/option</span> 
                            <span className="aoption">2 Options</span> 
                            <span className="option">(min. Order)</span>
                        </div>  
                        <div className="row4">
                            <span className="oldprice"> R98.12 - R1,119.114 </span>
                        </div>
                        <div className="row5">
                             <img src="/images/logo.png" alt="" /> 
                            <ul1> • Free shipping up to ( $40 ) </ul1>
                            <ul2> • On time delivery guaranteed</ul2>
                            <i><FaChevronRight/></i>
                        </div>
                        <div className="row6">
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
                              <p>Payments</p><img src="/images/visa.svg" alt="" /> <img src="/images/mastercard.svg" alt="" /><img className="apple" src="/images/applepay.svg" alt="" />
                        </div>
                        <div className="footer3">
                              <p> Alibaba.com Logistics <p2> Inspection Solutions</p2> </p>
                        </div>
                        
                        </div>

                            <div className="col3">
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
                
            } 
            </div>
            
          
    }

    return(
        <div>
            {content}
        </div>
    )
}









export default New
