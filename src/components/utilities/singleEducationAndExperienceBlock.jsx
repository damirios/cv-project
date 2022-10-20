import '../../styles/datesStyle.css';
import getFormattedDate from './getFormattedDate';

function getValue(field, inputType) {
    if (field == null) {
        return '';
    }

    if (inputType === 'organization') {
        return field.organization || field.university;
    } else if (inputType === 'position') {
        return field.position || field.degree;
    } else if (inputType === 'from') {
        return getFormattedDate(field.dateFrom);
    } else if (inputType === 'to') {
        return getFormattedDate(field.dateTo);
    } else if (inputType === 'details') {
        return field.details;
    }
}

function SingleBlock(props) {
    const {organization, position} = props.educationAndJob;
    const {field} = props;

    return (
        <div className="single-block">
            <div className="single-block__position">
                <input type="text" placeholder={position} name='prev-position' defaultValue={getValue(field, 'position')} />
            </div>
            <div className="single-block__organization">
                <input type="text" placeholder={organization} name='prev-organization' defaultValue={getValue(field, 'organization')} />
            </div>
            <div className="single-block__dates dates">
                <div className="dates__from">
                    <label htmlFor="date-from">From: </label>
                    <input type="date" id='date-from' name='date-from' defaultValue={getValue(field, 'from')} />
                </div>
                <div className="dates__to">
                    <label htmlFor="date-to">To: </label>
                    <input type="date" id='date-to' name='date-to' defaultValue={getValue(field, 'to')}/>
                </div>
            </div>
            <div className="single-block__description">
                <textarea name="prev-description" placeholder='Detailed description' defaultValue={getValue(field, 'details')}></textarea>
            </div>
        </div>
    );
}

export default SingleBlock;