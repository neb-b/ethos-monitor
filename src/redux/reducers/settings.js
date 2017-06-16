import { handleActions } from 'redux-actions'

const initialState = {
	loading: true
}

const settings = (state = initialState, action) => {
	switch (action.type) {
		case 'TEST':
			return { ...state }
	}
}
