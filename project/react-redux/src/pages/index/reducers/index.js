import { combineReducers } from 'redux'
import { listData } from './list';
import { loadingData } from './loading';

const newsApp = combineReducers({

    listData,
    loadingData

});

export default newsApp
