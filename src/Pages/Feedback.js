// import { useNavigate } from "react-router-dom";
import FormFeedback from "../Components/CreateFeedback/FormFeedback.js";

const Feedback = () =>{
    // const navigate = useNavigate();
    return(
        <div>
            <FormFeedback/>
            {/* <button classonClick={() => navigate('/')}>selesai input</button>
            <button onClick={() => navigate('/seefeedback')}>lihat all feedback</button> */}
        </div>
    )
};

export default Feedback;