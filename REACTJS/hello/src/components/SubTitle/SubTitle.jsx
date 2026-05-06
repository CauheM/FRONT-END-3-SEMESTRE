import './SubTitle.css';
function SubTitle(props){
    return(
        <h2>
            {props.texto}
            {props.cabo}
        </h2>
    );
    
}

export default SubTitle;