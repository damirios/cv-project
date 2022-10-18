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
                        <button onClick={props.buttons.loadExample} className="header__preview">Load Example</button>
                        <button onClick={props.buttons.showPreview} className="header__preview">Preview</button>
                        <button onClick={props.buttons.resetForm} className="header__reset">Reset Form</button>
                        <button onClick={props.buttons.createPDF} className="header__create-PDF">Create PDF</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;