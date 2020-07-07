import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.faqs, action) {
	switch (action.type) {
		case types.GET_FAQS_SUCCESS:
			return action.faqs;
		default:
			return state;
	}
}