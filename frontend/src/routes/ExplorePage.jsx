import NavBar from "../components/NavBar"
import earthImage from "../../public/images/earth.png"
import "../routes/css/ExplorePage.css";

export default function ExplorePage(){
    return(
        <div className="sweet">
        <NavBar />
        <div className="wrapper">
            <button className="blog">Button 1</button>
            <button className="blog">Button 2</button>
            <button className="blog">Button 3</button>
            <button className="blog">Button 4</button>
            <button className="blog">Button 5</button>
            <button className="blog">Button 6</button>
        </div>

        </div>
        

    )
}