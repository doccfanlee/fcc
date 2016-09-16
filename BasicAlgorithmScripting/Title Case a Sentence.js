function titleCase(str) {
    function regExFn(match) {
        return match[0].toUpperCase() + match.slice(1).toLowerCase();
    }


    return str.replace(/\S+/g, regExFn);
}