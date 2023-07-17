import { useNavigate } from "react-router-dom";
import GetAllFeedback from "../Components/GetAllFeedback"

const SeeFeedback = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <GetAllFeedback/>
            <button onClick={() => navigate('/')}>selesai input</button>
        </div>
    )
};

export default SeeFeedback;