function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = (month.toString().length === 1) ? '0' + month.toString() : month.toString();
    day = (day.toString().length === 1) ? '0' + day.toString() : day.toString();

    return `${year.toString()}-${month}-${day}`;
}

export default getFormattedDate;