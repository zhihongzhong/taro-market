import {REPOSITORY} from '../constants/repository'

// get object from internet 
// then post it to repository
// should simulate get method 
export const AddToRepository = (merchandises)=> ({
    type: REPOSITORY.ADD_TO_REPOSITORY,
    merchandises,
    filter: REPOSITORY.SHOW_NORMAL,
})

