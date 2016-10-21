/**
 * Created by dantegg on 16-9-9.
 */
import {combineReducers} from 'redux'
import counter from './counter'
import posts from './posts'
//import {red_color,green_color,blue_color} from './color'



const rootReducer = combineReducers({
    counter,
    posts
})


export default rootReducer