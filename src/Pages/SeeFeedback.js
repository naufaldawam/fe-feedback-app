import { useNavigate } from "react-router-dom";
import GetAllFeedback from "../Components/GetAllFeedbackInput/SeeFeedbackForUser"

const SeeFeedback = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <GetAllFeedback/>
            <button onClick={() => navigate('/')}>selesai melihat feedback dari banyak orang</button>
        </div>
    )
};

export default SeeFeedback;