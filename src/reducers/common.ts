export type LinksAction = {
    type: 'loading',
} | {
    type: 'done',
};

export default function fetchMain(state = [], action: LinksAction) {
    switch (action.type) {
        case 'loading':
            return state;
        default:
            return state;
    }
}
