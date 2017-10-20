import { xssFilter } from './libs/xssFilter'
import { getCookie, setCookie } from './libs/cookie'
import { strReverse, strTirm, strTrunc } from './libs/string'
import { arrSortQuick, arrSortBubble, arrSortMerge } from './libs/sort'

const UA = navigator.userAgent;

/**
 * 配合fetch 格式化body
 * @param params
 */
const stringifyParams = (params) => (
    Object.keys(params).map((key) => (key + '=' + encodeURIComponent(params[key]))).join('&')
);

/**
 * 判断是否是微信
 */
const isWechat = () => {
    return (/micromessenger/i).test(UA);
};

const supportLocalStorage = (function () {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
})();

const supportSessionStorage = (function () {
    const test = 'test';
    try {
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
})();

/**
 * 本地存储
 * @type {{set: locStorage.set, get: locStorage.get, removeItem: locStorage.removeItem, isSupport: locStorage.isSupport}}
 */
const locStorage = {
    set: function (key, value) {
        if (supportLocalStorage) {
            localStorage.setItem(key, value);
        } else if (supportSessionStorage) {
            sessionStorage.setItem(key, value);
        }
    },
    get: function (key) {
        if (supportLocalStorage) {
            return localStorage.getItem(key);
        } else if (supportSessionStorage) {
            return sessionStorage.getItem(key);
        }
    },
    removeItem: function (key) {
        if (supportLocalStorage) {
            return localStorage.removeItem(key);
        } else if (supportSessionStorage) {
            return sessionStorage.removeItem(key);
        }
    },
    isSupport: function (key) {
        return supportLocalStorage || supportSessionStorage;
    }
};

/**
 * 获取 绝对地址
 * @param href
 * @returns {string}
 */
const getAbsoultePath = href => {
    let link = document.createElement('a');
    link.href = href;
    return (link.protocol + '//' + link.host + link.pathname + link.search + link.hash);
};


/**
 * 监听浏览器回退事件
 * @param actionToDo
 */
const pageBackFromNextPage =(actionToDo) => {

    // pageshow
    // UA.android && window.addEventListener('focus', actionToDo, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            actionToDo(e);
        }
    }, false);

    // visibilityChange
    document.addEventListener('visibilitychange', function (e) {
        if (document.visibilityState == 'visible' || !document.hidden) {
            actionToDo(e);
        }
    }, false);

    // webkitVisibilityChange
    document.addEventListener('webkitVisibilitychange', function (e) {
        if (document.webkitVisibilityState == 'visible' || !document.webkitHidden) {
            actionToDo(e);
        }
    }, false);
};

/**
 * 获取URL 参数对象
 * @param query
 * @returns {{}}
 */
const getRequestParams = (query) => {
    let search = query || location.search.substring(1);
    return search ? JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
            return key === "" ? value : decodeURIComponent(value);
        }) : {};
};


export {

    stringifyParams,
    isWechat,
    locStorage,
    pageBackFromNextPage,
    xssFilter,
    getAbsoultePath,
    arrSortQuick,
    arrSortBubble,
    arrSortMerge,
    strReverse,
    strTirm,
    strTrunc,
    getCookie,
    setCookie,
    getRequestParams,

}