import SingleBlock from "../utilities/singleEducationAndExperienceBlock";

function SeveralBlocks(props) {
    const {allBlocks, example} = props;
    
    return (
        allBlocks.map(block => {
            return <SingleBlock educationAndJob={props.educationAndJob} key={block.id} example={example}/>
        })
    );
}

export default SeveralBlocks;