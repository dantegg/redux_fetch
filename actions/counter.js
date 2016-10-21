/**
 * Created by dantegg on 16-9-9.
 */


const FETCH_GET =  {
    method:'get',
    //body:paydata,
    credentials: 'include',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json, text/javascript,*/*'
    }
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const TESTA = 'TESTA'

export function increment() {
    // return{
    //     type:INCREMENT_COUNTER
    // }
    return {
        type:INCREMENT_COUNTER,
    }
}

export function decrement() {
    return{
        type:DECREMENT_COUNTER
    }
}

export function incrementIfOdd() {
    return(dispatch,getState) =>{
        const {counter} = getState()

        if(counter%2 ===0){
            return
        }
        dispatch(increment())
    }
}

export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment())
        },delay)
    }
}

export function testFetch(){
        return (dispatch)=> {
            fetch('http://192.168.11.123/findSchoolList_HomePage.action', FETCH_GET).then(function (res) {
                if (res.ok) {
                    res.json().then(function (result) {
                        dispatch(testlist(result.schoolBeanList));
                        //dispatch(increment())
                        // return {
                        //     type: TESTA,
                        //     post: Object.assign([], result.schoolBeanList)
                        // }

                    })
                }
            }, function (ex) {
                console.log(ex)
            })
        }
}

function testlist(list){
    return {
        type:TESTA,
        posts:list
    }
}