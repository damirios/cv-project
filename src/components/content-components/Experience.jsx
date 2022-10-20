import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SeveralBlocks from './SeveralBlocks';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newBlock: {
                id: uuidv4()
            },
            allBlocks: [{id: uuidv4()}]
        }

        this.addBlock = this.addBlock.bind(this);
        this.deleteBlock = this.deleteBlock.bind(this);
    }

    addBlock() {
        this.setState({
            allBlocks: this.state.allBlocks.concat(this.state.newBlock),
            newBlock: {id: uuidv4()}
        });
    }

    deleteBlock() {
        if (this.state.allBlocks.length > 1) {
            this.setState({
                allBlocks: this.state.allBlocks.slice(0, -1)
            });
        }
    }

    render() { 
        const {experienceFields} = this.props;
        if (experienceFields != null) {
            experienceFields.type = 'experience'; // заполняю блок experience, а не education (оба имеют одинаковую структуру и компоненты)
        }

        const { allBlocks } = this.state;
        const educationAndJob = {
            organization: 'Organization',
            position: 'Position'
        }

        return (
            <div className="experience">
                <h2 className='header-text'>Job experience</h2>
                <SeveralBlocks allBlocks={allBlocks} educationAndJob={educationAndJob} fields={experienceFields}/>
                <div className="buttons">
                    <button className='delete-button' type='button' onClick={this.deleteBlock}>Delete last block</button>
                    <button className='add-button' type='button' onClick={this.addBlock}>Add new block</button>
                </div>
            </div>
        );
    }
}
 
export default Experience;