import request from 'api/request'
import { changeLoadingState } from './common_loading'

export const FETACH_LIST_DATA = 'FETACH_LIST_DATA';

export const fetchListData = () => {

	return (dispatch, getState) => {

		dispatch(changeLoadingState(true))

		request.post('/test/aaa', {})
		.then((data) => {

			dispatch ({

				type: FETACH_LIST_DATA,
				data: data

			})


			dispatch(changeLoadingState(false))

		})

	}

};
