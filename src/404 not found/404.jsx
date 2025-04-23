import { useNavigate } from "react-router-dom"; // <- Import dulu
import imgNotFound from "../assets/nonicons_not-found-16.png";
import "./404.css";

function NotFound() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <div className="container_not_found">
      <div>
        <div className="container_NOT_FOUND_img">
          <p>404 <span>NOT FO</span>UND</p>

          <div className="container_img_not_found">
            <img src={imgNotFound} alt="not found" />
          </div>
        </div>

        <div className="describe_not_found">
          page not found
        </div>

        <div className="container_button">
          <div className="button_back">
            <button onClick={handleBack}>
              Back to menu <span>&#8592;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
