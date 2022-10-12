import '../../styles/datesStyle.css';

function SingleBlock() {
    return (
        <div className="single-block">
            <div className="single-block__position">
                <input type="text" placeholder='Position' name='prev-position'/>
            </div>
            <div className="single-block__organization">
                <input type="text" placeholder='Organization' name='prev-organization' />
            </div>
            <div className="single-block__dates dates">
                <div className="dates__from">
                    <label htmlFor="date-from">From: </label>
                    <input type="date" id='date-from' name='date-from'/>
                </div>
                <div className="dates__to">
                    <label htmlFor="date-to">To: </label>
                    <input type="date" id='date-to' name='date-to'/>
                </div>
            </div>
            <div className="single-block__description">
                <textarea name="prev-description" placeholder='Detailed description'></textarea>
            </div>
        </div>
    );
}

export default SingleBlock;