import {
    TEST_REPOSITOYR,
    REPOSITORY, 
    TEST_MERCHANDISES
} from '../constants/repository'

const repository = (state = TEST_REPOSITOYR, action ) => {
    switch(action.type) {
        default: 
            return TEST_REPOSITOYR
        case REPOSITORY.ADD_TO_REPOSITORY:          // clean up repository and restore it therefore up to date 
            return {
                merchandises: merchandisesReducer(action),
                filter: filterReduer(action)
            }
    }
}

const filterReduer = (state = REPOSITORY.SHOW_NORMAL, action) =>{
    switch(action.type) {
        default:
            return REPOSITORY.SHOW_NORMAL
        case REPOSITORY.SHOW_PRICE_FROM_HIGH_TO_LOW:
            return REPOSITORY.SHOW_PRICE_FROM_HIGH_TO_LOW
        case REPOSITORY.SHOW_PRICE_FROM_LOW_TO_HIGH:
            return REPOSITORY.SHOW_PRICE_FROM_LOW_TO_HIGH
    }
}

const merchandisesReducer = (state = TEST_MERCHANDISES, action)=> {
    switch(action.type) {
        default:
            return TEST_MERCHANDISES
        case REPOSITORY.ADD_TO_REPOSITORY:
            return [
                ...state,
                action.merchandises
            ]
    }
}
export default repository