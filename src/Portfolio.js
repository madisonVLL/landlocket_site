import "./App.css"
import passionT from "./images/PTPhome.png"

const portfolio_sites = [{title: "Passion T Plates LLC Resturant", url: "http://localhost:3001/", photo: passionT}]



function Project(site) {
    return (
        <div className="contentDiv" style={{margin: "1em"}}>
            <a href={site.url} target="_blank"> <h1><i>{site.title}</i></h1><br></br><img src={site.photo} alt={site.title} style={{width: "100%", borderRadius: "2em"}}></img></a>
        </div>
    )
}

const Portfolio = () => {
    const portolioDiv = []
    for (const site in portfolio_sites) {
        portolioDiv.push(Project(portfolio_sites[site]))
    }
    return (
       portolioDiv.map((project) => <span>{project}</span>)
    )
}

export default Portfolio



