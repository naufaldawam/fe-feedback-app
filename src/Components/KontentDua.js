import {useNavigate} from 'react-router-dom';

const KontenDua = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Ini konten About</h1>
            <button onClick={() => navigate('/')}>back to home</button>
        </div>
    )
};

export default KontenDua;