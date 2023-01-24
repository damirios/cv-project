import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SeveralBlocks from './SeveralBlocks';

function Education(props) {
    const [newBlock, setNewBlock] = useState({id: uuidv4()});
    const [allBlocks, setAllBlocks] = useState([{id: uuidv4()}]);

    function addBlock() {
        setAllBlocks(allBlocks.concat(newBlock));
        setNewBlock({id: uuidv4()});
    }

    function deleteBlock() {
        if (allBlocks.length > 1) {
            setAllBlocks(allBlocks.slice(0, -1));
        }
    }

    const { educationFields } = props;
    educationFields.type = 'education'; // заполняю блок education, а не experience (оба имеют одинаковую структуру и компоненты)

    const educationAndJob = {
        organization: 'University',
        position: 'Degree'
    }

    return (
        <div className="education">
            <h2 className='header-text'>Education</h2>
            <SeveralBlocks allBlocks={allBlocks} educationAndJob={educationAndJob} fields={educationFields}/>
            <div className="buttons">
                <button className='delete-button' type='button' onClick={deleteBlock}>Delete last block</button>
                <button className='add-button' type='button' onClick={addBlock}>Add new block</button>
            </div>
        </div>
    );
}

// class Education extends Component {
//     constructor(props) {
//         super(props);

//         this.allBlocks = [];
//         for (let i = 0; i < Object.keys(props.educationFields).length; i++) {
//             this.allBlocks.push({id: uuidv4()});
//         }
        
//         this.state = {
//             newBlock: {
//                 id: uuidv4()
//             },
//             allBlocks: this.allBlocks
//         }

//         this.addBlock = this.addBlock.bind(this);
//         this.deleteBlock = this.deleteBlock.bind(this);
//     }

//     addBlock() {
//         this.setState({
//             allBlocks: this.state.allBlocks.concat(this.state.newBlock),
//             newBlock: {id: uuidv4()}
//         });
//     }

//     deleteBlock() {
//         if (this.state.allBlocks.length > 1) {
//             this.setState({
//                 allBlocks: this.state.allBlocks.slice(0, -1)
//             });
//         }
//     }

//     render() { 
//         const {educationFields} = this.props;

//         if (educationFields != null) {
//             educationFields.type = 'education'; // заполняю блок education, а не experience (оба имеют одинаковую структуру и компоненты)
//         }

//         const { allBlocks } = this.state;
//         const educationAndJob = {
//             organization: 'University',
//             position: 'Degree'
//         }

//         return ( 
//             <div className="education">
//                 <h2 className='header-text'>Education</h2>
//                 <SeveralBlocks allBlocks={allBlocks} educationAndJob={educationAndJob} fields={educationFields}/>
//                 <div className="buttons">
//                     <button className='delete-button' type='button' onClick={this.deleteBlock}>Delete last block</button>
//                     <button className='add-button' type='button' onClick={this.addBlock}>Add new block</button>
//                 </div>
//             </div>
//         );
//     }
// }
 
export default Education;