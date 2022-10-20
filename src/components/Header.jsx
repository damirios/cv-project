function getPreviewButton(props) {
    if (props.preview) {
        return "Edit CV";
    }
    return "Show Preview";
}

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__title">
                        <span>
                            Your CV
                        </span>
                    </div>
                    <div className="header__buttons">
                        <button onClick={props.buttons.loadExample} className="header__example">Load Example</button>
                        <button onClick={props.buttons.showPreview} className="header__preview">{getPreviewButton(props)}</button>
                        <button onClick={props.buttons.resetForm} className="header__reset">Reset Form</button>
                        <button onClick={props.buttons.createPDF} className="does-not-work header__create-PDF">Create PDF</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;