import NavBar from "../components/NavBar"
import earthImage from "../../public/images/earth.png"
import "../routes/css/ExplorePage.css";
import fitImage from "../../public/images/home-page-fitdoodles.jpg"
import jungleImage from "../../public/images/home-page-jungledoodles.jpg"
import snoozerImage from "../../public/images/home-page-snoozerdoodles.jpg"
import studyImage from "../../public/images/home-page-studydoodles.jpg"
import truffleImage from "../../public/images/home-page-truffledoodles.jpg"
import wonderImage from "../../public/images/home-page-wonderdoodles.jpg"
import { Link } from "react-router-dom";


export default function ExplorePage(){
    return(
        <div className="sweet">
        <NavBar />
        <div className="wrapper" style={{ backgroundColor: '#D7E5CA' }}>
            <button className="blog">
                <p className="blog1">Title: My outfit for day 1!</p>
                <p>Rach</p>
                <p>#fitdoodles</p>

            <img className="fitimage" src={fitImage} alt="fitimage"/>
            </button>

            <Link to={"/uploadedPage"}>
            <button className="blog">
                <p className="blog1">Title: Such a beautiful hike</p>
                <p>Suking</p>
                <p>#jungledoodles</p>
                <img className="fitimage" src={jungleImage} alt="jungimage"/>
            </button>
            </Link>

            <button className="blog">
                <p className="blog1">Title: Loving my hotel!</p>
                <p>Rhe</p>
                <p>#snoozerdoodles</p>
                <img className="fitimage" src={snoozerImage} alt="jungimage"/>
            </button>

            <button className="blog">
                <p className="blog1">Title: My study spot!</p>
                <p>Nat</p>
                <p>#studydoodles</p>
                <img className="fitimage" src={studyImage} alt="jungimage"/>
            </button>

            <button className="blog">
                <p className="blog1">Title: My go to meal here</p>
                <p>shu</p>
                <p>#truffledoodles</p>
                <img className="fitimage" src={truffleImage} alt="jungimage"/>
            </button>

            <button className="blog">
                <p className="blog1">Title: Sightseeing treasures!</p>
                <p>rachki</p>
                <p>#wonderdoodles</p>
                <img className="fitimage" src={wonderImage} alt="jungimage"/>
            </button>
        </div>

        </div>
        

    )
}