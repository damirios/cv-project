function getPreviewButton(props) {
    if (props.preview) {
        return "Edit CV";
    }
    return "Show Preview";
}

export default function Header(props) {
    const {loadExample, showPreview, resetForm, createPDF} = props.buttons;
    const {preview} = props;

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
                        <button onClick={loadExample} className="header__example">Load Example</button>
                        <button onClick={showPreview} className="header__preview">{getPreviewButton(props)}</button>
                        <button onClick={resetForm} className="header__reset">Reset Form</button>
                        <button onClick={preview ? createPDF : showPreview} className="header__create-PDF">
                            {preview ? 'Create PDF' : 'To preview'} 
                        </button>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}
