function collectFormData() {
    const fieldsInfo = {personal: null, education: {1: null}, experience: {1: null}};

    const form = document.querySelector('.content__form');

    const personalInfoBlock = form.querySelector('.personal-info__grid');
    const educationBlock = form.querySelector('.education-and-experience .education');
    const experienceBlock = form.querySelector('.education-and-experience .experience');

    // getting personal info block information
    const personalCommonInfo = personalInfoBlock.querySelectorAll('.personal-info__common div');
    const personalContacts = personalInfoBlock.querySelectorAll('.personal-info__contacts div');

    const photo = personalInfoBlock.querySelector('.personal-info__photo label img').src; // img element
    const firstName = personalCommonInfo[0].querySelector('input').value;
    const lastName = personalCommonInfo[1].querySelector('input').value;
    const position = personalCommonInfo[2].querySelector('input').value;
    const address = personalContacts[0].querySelector('input').value;
    const phone = personalContacts[1].querySelector('input').value;
    const email = personalContacts[2].querySelector('input').value;
    const description = personalInfoBlock.querySelector('.personal-info__about-me textarea').value;

    fieldsInfo.personal = {photo, firstName, lastName, position, address, phone, email, description};
    
    // getting education block information
    const singleEducationBlocks = educationBlock.querySelectorAll('.single-block');
    for (let i = 0; i < singleEducationBlocks.length; i++) {
        const singleBlock = singleEducationBlocks[i];

        const degree = singleBlock.querySelector('.single-block__position input').value;
        const university = singleBlock.querySelector('.single-block__organization input').value;
        const dateFrom = singleBlock.querySelector('.single-block__dates .dates__from input').value;
        const dateTo = singleBlock.querySelector('.single-block__dates .dates__to input').value;
        const details = singleBlock.querySelector('.single-block__description textarea').value;

        fieldsInfo.education[i + 1] = {degree, university, dateFrom, dateTo, details};
    }
    
    // getting education block information
    const singleExperienceBlocks = experienceBlock.querySelectorAll('.single-block');
    for (let i = 0; i < singleExperienceBlocks.length; i++) {
        const singleBlock = singleExperienceBlocks[i];

        const position = singleBlock.querySelector('.single-block__position input').value;
        const organization = singleBlock.querySelector('.single-block__organization input').value;
        const dateFrom = singleBlock.querySelector('.single-block__dates .dates__from input').value;
        const dateTo = singleBlock.querySelector('.single-block__dates .dates__to input').value;
        const details = singleBlock.querySelector('.single-block__description textarea').value;

        fieldsInfo.experience[i + 1] = {position, organization, dateFrom, dateTo, details};
    }
    
    return fieldsInfo;
}

export default collectFormData;