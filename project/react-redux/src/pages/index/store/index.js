import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';


/**
 * middleware队列
 * 排序有要求：
 *  thunk置底
 * thunk的作用：
 *  根据传入的action类型，来实现异步action
 *  if (typeof action === 'function') {
 *    return action(dispatch, getState, extraArgument);
 *  }
 */

const middlewares = [
  thunk
];

/**
 * 通过redux的compose函数 将store.dispatch和middlewares进行currying化来实现外倒内调用
 *             ----> --->
 * 新dispatch = logger(thunk(store.dispatch))
 */
const createAppStore = applyMiddleware(...middlewares);
//配合chrome Redux插件，方便追踪数据流向
const addDevToolsExtension = compose(createAppStore, window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducers, addDevToolsExtension);

export default store;
