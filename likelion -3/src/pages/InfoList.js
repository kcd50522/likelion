import Info from "./Info";
import "../Main.css";

const InfoList = (props) => {
    const {name, info} = props.data;
    return (
        <>
            <div className="name">{name}</div>
            <div className="contacts">
                {info.map((data, index) => (
                    <Info data = {data} key ={index}/>
                ))}
            </div>
        </>
    );
};

export default InfoList;