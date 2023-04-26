import "../Main.css"
import {Link} from 'react-router-dom';

const Sns = (props) => {
    const {insta} = props.data;
    return (
        <>
            <div className="sns">
            <p>{insta}</p>
            <Link to='https://www.instagram.com/aeyxung/'><img src="./img/instagram_logo.png"/></Link>
            </div>
        </>
    );
};

export default Sns;