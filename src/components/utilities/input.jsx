import '../../styles/inputStyle.css';

function Input(props) {
    return (
        <div className={props.classname}>
            <input type={props.type} placeholder={props.placeholder} defaultValue={props.value} name={props.name} required={props.required}/>
        </div>
    );
}

export default Input;