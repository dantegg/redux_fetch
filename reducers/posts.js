/**
 * Created by dantegg on 16-10-21.
 */
import {INCREMENT_COUNTER,DECREMENT_COUNTER,TESTA} from '../actions/counter'


export default function posts(state =[],action) {
    //console.log("???",action)
    switch (action.type){
        case TESTA:
            //console.log("got info")
            return Object.assign([],action.posts)
        default:
            return state
    }
}
