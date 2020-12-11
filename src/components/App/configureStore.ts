import { createStore } from 'redux';
import rootReducer from '../../reducers/inedx';

export default function configureStore() {
    return createStore(
        rootReducer,
        {},
    );
}
