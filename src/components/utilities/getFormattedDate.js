function getFormattedDate(date) {
    // get correct Date format from string format date '2022-10-10' to new Date(2022, 10, 10)
    if (typeof date == 'string') {
        date = new Date(date.split('-')[0], date.split('-')[1], date.split('-')[2]);
    }

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = (month.toString().length === 1) ? '0' + month.toString() : month.toString();
    day = (day.toString().length === 1) ? '0' + day.toString() : day.toString();

    return `${year.toString()}-${month}-${day}`;
}

export default getFormattedDate;