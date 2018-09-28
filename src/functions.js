export function zeroFill (value) {
    return +value < 10 ? '0' + +value : +value;
}

export function format24h(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = zeroFill(hours);
    minutes = zeroFill(minutes);

    const strTime = hours + ':' + minutes;

    return strTime;
}

export function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    const strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}