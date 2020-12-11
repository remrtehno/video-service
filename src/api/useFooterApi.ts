import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../utils/api';

const useFooterApi = (): string => {
    const [state, setState] = useState('');
    useEffect(() => {
        axios.get(api.footer).then((response) => {
            setState(response.data);
        });
    }, []);

    return state;
};

export default useFooterApi;
