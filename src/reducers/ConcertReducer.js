import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.concerts, action) {
	switch (action.type) {
		case types.GET_CONCERTS_SUCCESS:
			return action.concerts;
		default:
			return state;
	}
}