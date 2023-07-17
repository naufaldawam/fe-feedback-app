import { useNavigate } from "react-router-dom";
import FormFeedback from "../Components/FormFeedback"

const Feedback = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <FormFeedback/>
            <button onClick={() => navigate('/')}>selesai input</button>
            <button onClick={() => navigate('/seefeedback')}>lihat all feedback</button>
        </div>
    )
};

export default Feedback;