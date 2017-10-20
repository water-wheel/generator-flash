import { CHANGE_LOADING_STATE } from '../actions/common_loading'
import { initLoading } from './initState'

export const loadingData = (state = initLoading, action) => {

	switch (action.type) {

		case CHANGE_LOADING_STATE:

			return {...state, openLoading: action.data}

		default:

            return state

	}

}
