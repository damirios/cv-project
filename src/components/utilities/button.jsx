function Button(props) {
    return (
        <button className={props.class} type='button' onClick={props.addBlock}>{props.name}</button>
    );
}

export default Button;