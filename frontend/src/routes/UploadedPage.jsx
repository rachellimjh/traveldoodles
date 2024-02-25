import jungleImage from "../../public/images/home-page-jungledoodles.jpg";
import NavBar from "../components/NavBar";
import studyImage from "../../public/images/home-page-studydoodles.jpg"

export default function UploadedPage(){
    return(
      
        <div className = "wrapper">
            <NavBar/>
            <div className="left-wrapper">
                <img src={studyImage} alt="studyImage"/>
            </div>
            <div className="right-wrapper">
                <h1>test</h1>
            </div>
        </div>
    )
  
        
}