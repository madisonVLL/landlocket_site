import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHammer, faCalendarDays, faUserTie } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
    return (
        <div style={{padding: "1em"}}>
            <div style={{border: "1em double white", borderRadius: "2em", padding: "1em", backgroundColor: "#1F4671"}}>
                <h2 style={{textAlign: "center"}}>Mission Statement & What We Do</h2>
                <p>At Dev-Ality, we develop responsive, affordable, and professional websites for growing restaurants and hotels seeking to expand their strong social media presence or word of mouth to larger search engines. We do this through keeping their social media profiles and reviews front and center of their website design, fully integrating this content from home screen to the footer. When clicking on a Dev-Ality made-website, potential customers are given a curated view of what other customers. As word of mouth and social media are by far still the best form of advertisement in the 21st century, placing this information front and center seeks to draw in more customers, cutting out the need for an unpredictable and everchanging algorithm to highlight your business, the positive proof is already there. Unlike regular internet searches and review platforms, we utilize artificial intelligence to highlight the best feedback possible, hence putting your restaurant or hotel’s best foot forward with every visit to your site. With smart, ai-powered, responsive, websites, Dev-Ality will help further your online presence, putting your customers voice and your best foot forward. </p>
            </div>
            <div style={{width: "100%", margin: "auto",}}>
            <h2 style={{textAlign: "center", padding: "1em", backgroundColor: "#498ec7", border: "1em double white", borderRadius: "2em", margin: "1em"}}>Our Services</h2>
            </div>
        <table>
            <tr>
                <th className="contentDiv" style={{width:"33%", alignContent: "start", backgroundColor: "#1F4671"}}><h3>Website Builder</h3><FontAwesomeIcon icon={faHammer} className="fontIcon"/><p>Build responsive, professional, and up to date websites within a two-week period. This will help establish your online presence on google and other search engines, driving traffic from social media and word of mouth to further explore your hospitality-related business.</p></th>
                <th className="contentDiv" style={{width:"33%", alignContent: "start"}}><h3>Monthly Website Editing</h3><FontAwesomeIcon icon={faCalendarDays} className="fontIcon"/><p>Routine website edits, updates to new technologies, menu items, hours, and other company related changes. This will ensure that your website is always up to date reflecting the information and changes your customers need to know. This will be done through a monthly check in with one of our web designers, however immediate requests can me made any day of the month for a minimal additional charge.</p></th>
                <th className="contentDiv" style={{width:"33%", alignContent: "start", backgroundColor: "#1F4671"}}><h3>Web Hosting</h3><FontAwesomeIcon icon={faUserTie} className="fontIcon"/><p>From managing the domain to ensuring the site’s always online, our website hosting services ensure that customers will always be able to access your website.</p></th>
            </tr>
        </table>
    </div>
    )
}

export default AboutUs