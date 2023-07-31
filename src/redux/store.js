import { configureStore } from '@reduxjs/toolkit';
import langReducer from './slices/langSlice';

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    // Save to localStorage
    const state = store.getState();
    localStorage.setItem('pmcs_lang', JSON.stringify(state.lang));

    return result;
};

const reHydrateStore = () => {
    if (localStorage.getItem('pmcs_lang') !== null) {
        return {
            lang: JSON.parse(localStorage.getItem('pmcs_lang')),
        };
    }

    return {
        lang: null,
    };
};

const store = configureStore({
    reducer: { lang: langReducer },
    preloadedState: reHydrateStore(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
