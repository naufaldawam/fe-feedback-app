import EditProfile from "../Components/KontenProfile/EditProfile/EditProfile";
import FeedbackStatistic from "../Components/KontenProfile/FeedbackStatistic/FeedbackStatistic";
import HistoryFeedback from "../Components/KontenProfile/HistoryFeedback/HistoryFeedback";
import UserProfileInformation from "../Components/KontenProfile/UserProfileInformation/UserProfileInformation";

const Profile = () => {
    return(
        <div>
            <UserProfileInformation/>
            <HistoryFeedback/>
            <FeedbackStatistic/>
            <EditProfile/>
            <button>Logout</button>
            <div>
                <h3>anda telah login selama (counttimer)</h3>
            </div>
            <div>
                <h3>Hubungi dukungan</h3>
            </div>
        </div>
    )
};

export default Profile;