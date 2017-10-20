/**
 * xssFilter
 */
export const xssFilter = (str) => {

    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/'/g, '&acute;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/\|/g, '&brvbar;');

    return str;

};
