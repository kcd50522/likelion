import Introduce from "./Introduce";

const IntroduceList = (props) => {
    const { introduce } = props.data;
    return (
        <>
            {introduce.map((data, index) => (
                    <p>
                    <Introduce data = {data} key ={index}/>
                    </p>
                ))}
        </>
    );
};

export default IntroduceList;