import { LoaderState } from '../types/Loader';

export type LoaderActions = {
    type: 'LOADING',
} | {
    type: 'LOADED',
};

export default function isLoading(state: LoaderState, action: LoaderActions) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'LOADED':
            return {
                ...state,
                isLoading: false,
            };
        default:
            return {
                ...state,
                isLoading: true,
            };
    }
}
