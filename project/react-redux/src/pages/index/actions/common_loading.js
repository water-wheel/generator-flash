export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

export const changeLoadingState = (newState) => {

	return {

		type: CHANGE_LOADING_STATE,
		data: newState

	}

};