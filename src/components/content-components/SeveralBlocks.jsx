import SingleBlock from "../utilities/singleEducationAndExperienceBlock";

function SeveralBlocks(props) {
    const {allBlocks, fields} = props;
    console.log(props);
    
    return (
        allBlocks.map((block, index) => {
            return <SingleBlock educationAndJob={props.educationAndJob} key={block.id} field={fields[index + 1]}/>
        })
    );
}

export default SeveralBlocks;