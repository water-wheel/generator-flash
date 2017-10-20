/**
 * setCookie
 * @param key
 * @param value
 * @param days
 */
export const setCookie = (key, value, days) => {

    let expires;

    if (days) {

        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        expires = `; expires=${date.toGMTString()}`;

    } else {

        expires = '';

    }

    document.cookie = key + '=' + value + expires + '; path=/';

};

/**
 * getCookie
 * @param key
 * @returns {*}
 */
export const getCookie = (key) => {

    let keyEQ = key + '=';
    let itemList = document.cookie.split(';');
    for (let i = 0, len = itemList.length; i < len; i++) {

        let item = itemList[i];
        item = item.replace(/(^\s*)/g, '');

        if (item.indexOf(keyEQ) === 0) {

            return item.substring(keyEQ.length, item.length);

        }

    }

    return null;

};