import "../Main.css";



const Side = (props) => {
    const {side} = props.data;
    return (
        <>
        <div class="menu-bar">
        <div class = "index">
            <img className="profile" src ="./img/profile.png"/>
        <h3 class="click">{side}</h3>
        </div>
        </div>
        </>
    );
};

export default Side;