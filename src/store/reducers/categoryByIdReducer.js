const defaultState = {
    data: {},
    status: 'loading'
};

const LOAD_CATEGORY_BY_ID = 'LOAD_CATEGORY_BY_ID';

export const loadCategoryByIdAction = category => ({type: LOAD_CATEGORY_BY_ID, payload: category});

export const categoryByIdReducer = (state = defaultState, action) => {
    
    if(action.type === LOAD_CATEGORY_BY_ID) {
        return {
            data: action.payload.category,
            status: 'ready'
        }
    }

    return state
}