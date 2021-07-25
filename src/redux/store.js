import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'greedyAnalytics',
    storage,
};

const middlewares = [sagaMiddleware];

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

const persistedStore = { store, persistor };

sagaMiddleware.run(rootSaga);

export default persistedStore;
