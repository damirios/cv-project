import '../../styles/datesStyle.css';
import getFormattedDate from './getFormattedDate';

function getValue(example, inputType) {
    if (example == null) {
        return '';
    }

    if (inputType === 'organization') {
        return example.organization || example.university;
    } else if (inputType === 'position') {
        return example.position || example.degree;
    } else if (inputType === 'from') {
        return getFormattedDate(example.from);
    } else if (inputType === 'to') {
        return getFormattedDate(example.to);
    } else if (inputType === 'details') {
        return example.details;
    }
}

function SingleBlock(props) {
    const {organization, position} = props.educationAndJob;
    const {example} = props;

    return (
        <div className="single-block">
            <div className="single-block__position">
                <input type="text" placeholder={position} name='prev-position' defaultValue={getValue(example, 'position')} />
            </div>
            <div className="single-block__organization">
                <input type="text" placeholder={organization} name='prev-organization' defaultValue={getValue(example, 'organization')} />
            </div>
            <div className="single-block__dates dates">
                <div className="dates__from">
                    <label htmlFor="date-from">From: </label>
                    <input type="date" id='date-from' name='date-from' defaultValue={getValue(example, 'from')} />
                </div>
                <div className="dates__to">
                    <label htmlFor="date-to">To: </label>
                    <input type="date" id='date-to' name='date-to' defaultValue={getValue(example, 'to')}/>
                </div>
            </div>
            <div className="single-block__description">
                <textarea name="prev-description" placeholder='Detailed description' defaultValue={getValue(example, 'details')}></textarea>
            </div>
        </div>
    );
}

export default SingleBlock;