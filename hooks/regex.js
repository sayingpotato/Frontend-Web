function isNull(v) {
    return (v === undefined || v === null) ? true : false;
}

export const isEnglish = (input) => {
    return !isNull(input.match(/[a-zA-Z0-9]/g));
}

export const isNumber = (input) => {
    return !isNull(input.match(/[0-9]/g));;
}

export const isMoreThan = (input, length) => {
    return input.length >= length;
}
