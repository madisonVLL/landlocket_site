import "./App.css"
import "./index.css"
import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const pricingFeatures = [{title: "Website Building", description: "Build responsive, professional, and up to date websites within a two-week period. This will help establish your online presence on google and other search engines, driving traffic from social media and word of mouth to further explore your hospitality-related business.", price: "1000"}, {title: "Monthly Website Editing", description: "Routine website edits, updates to new technologies, menu items, hours, and other company related changes. This will ensure that your website is always up to date reflecting the information and changes your customers need to know. This will be done through a monthly check in with one of our web designers, however immediate requests can me made any day of the month for a minimal additional charge. \n *can occur on more than a monthly basis, just a routine check of each website's functionalities occurs each month", price: "200/month"}, {title: "Website Hosting", description: "From managing the domain to ensuring the site’s always online, our website hosting services ensure that customers will always be able to access your website.", price: "30/year"}]

const PriceItem = ({buildState}) => {
    return (
        <div className="createItem">
            <h2 style={{textAlign: "center"}}>{buildState.title}</h2>
            <p>{buildState.description}</p>
            <h2 style={{textAlign: "center"}}>${buildState.price}</h2>
        </div>
    )

}
const Pricing = () => {
    var items = []
    for (var each in pricingFeatures) {
        items.push(
            <PriceItem buildState={pricingFeatures[each]} />
        )
    }
    return (
        <div>
            <table>
                <tr>
                {items.map((category) => <th style={{margin: "1em"}}>{category}</th>)}
                </tr>
            </table>
            <h1 style={{textAlign: "center", width: "fit-content", borderRadius: "50%", backgroundColor: "#498ec7"}}>Book a Consulation <span><FontAwesomeIcon  icon={faArrowAltCircleRight}/></span></h1>
        </div> 
    )
}

export default Pricing

/*
<div style={{display: "inline-flex", margin: "auto"}}>
                {items.map((category) => <div style={{margin: "1em"}}>{category}</div>)}
                </div>
                
                */