import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import reducers from './redux/reducers'

const isDev = __DEV__ // eslint-disable-line no-undef
const logger = createLogger();

const middleware = isDev
	? applyMiddleware(thunk, promise, logger)
	: applyMiddleware(thunk)

const store = createStore(
	reducers,
	undefined,
	compose(middleware, autoRehydrate())
)
persistStore(store, { storage: AsyncStorage }, rehydrateFinshed)

const rehydrateFinshed = val => {
	console.log('loaded babay', val)
}

export default store
