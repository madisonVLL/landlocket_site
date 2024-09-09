import "./App.css"
import passionT from "./images/PTPhome.png"
import useWindowSize from "./windowSize"

const portfolio_sites = [{title: "Passion T Plates LLC Resturant", url: "http://localhost:3001/", photo: passionT}]



function Project(site) {
    const { width, height }= useWindowSize()
    var img_size = String(width / 2) + "px"
    return (
        <div className="portfolio">
            <h1><i>{site.title}</i></h1>
            <a href={site.url} target="_blank"><img src={site.photo} alt={site.title} style={{width: img_size}}></img></a>
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



