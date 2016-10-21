/**
 * Created by dantegg on 16-9-9.
 */
import {INCREMENT_COUNTER,DECREMENT_COUNTER,TESTA} from '../actions/counter'
const FETCH_GET =  {
    method:'get',
    //body:paydata,
    credentials: 'include',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json, text/javascript,*/*'
    }
}

export default function counter(state =0,action) {
    switch (action.type){
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state -1
        // case TESTA:
        //     fetch('http://192.168.11.123/findSchoolList_HomePage.action', FETCH_GET).then(function (res) {
        //         if (res.ok) {
        //             res.json().then(function (result) {
        //                 //console.log(result.schoolBeanList)
        //                 //console.log(posts)
        //                 return Object.assign([], result.schoolBeanList)
        //                 // return {
        //                 //     posts:result.schoolBeanList
        //                 // }
        //             })
        //         }
        //     }, function (ex) {
        //         console.log(ex)
        //     })
        default:
            return state
    }
}

