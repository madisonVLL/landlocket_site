import "./App.css"
import "./index.css"
import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import trim from"./images/goldtrim.jpg" 

const pricingFeatures = [{title: "Website Building", description: "Build responsive, professional, and up to date websites within a two-week period. This will help establish your online presence on google and other search engines, driving traffic from social media and word of mouth to further explore your hospitality-related business.", price: "1000 flat fee"}, {title: "Monthly Website Editing", description: "Routine website edits, updates to new technologies, menu items, hours, and other company related changes. This will ensure that your website is always up to date reflecting the information and changes your customers need to know. This will be done through a monthly check in with one of our web designers, however immediate requests can me made any day of the month for a minimal additional charge. \n *can occur on more than a monthly basis, just a routine check of each website's functionalities occurs each month", price: "200/month"}, {title: "Website Hosting", description: "From managing the domain to ensuring the site’s always online, our website hosting services ensure that customers will always be able to access your website.", price: "30/year"}]

const PriceItem = ({buildState}) => {
    return (
        <div>
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
                {items.map((category) => <th style={{margin: "1em"}} className="contentDiv">{category}</th>)}
                </tr>
            </table>
            <div style={{textAlign: "center", margin: "auto", width: "50%"}}>
                <a target="_blank" href="https://calendly.com/madison-landlocket/30min">
                    <h1 className="buttonStyle">
                    Book a Consulation <span><FontAwesomeIcon  icon={faArrowAltCircleRight}/></span></h1>
                </a>
            </div>
        </div> 
    )
}

export default Pricing

