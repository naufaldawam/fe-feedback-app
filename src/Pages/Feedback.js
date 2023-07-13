import { useNavigate } from "react-router-dom";
import FormFeedback from "../Components/FormFeedback"

const Feedback = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <FormFeedback/>
            <button onClick={() => navigate('/')}>selesai input</button>
        </div>
    )
};

export default Feedback;