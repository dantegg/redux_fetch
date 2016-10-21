/**
 * Created by dantegg on 16-9-9.
 */
import React,{Component,PropTypes} from 'react'


class Counter extends Component{
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        // this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
    componentDidMount(){
        this.props.testFetch()
    }
    componentWillReceiveProps(nextProps) {
        //console.log('component will receive props',nextProps)
        console.log("next",nextProps.counter)
        console.log("default",this.props.counter)
        if(nextProps.counter !== this.props.counter){
            this.props.testFetch()
            console.log('component will receive props',nextProps)
        }
    }


    render(){
        const {increment,incrementIfOdd,incrementAsync,decrement,counter,posts} = this.props
        console.log('test')
        // this.props.posts.map(function (x) {
        //     console.log(x.schoolName)
        // })
        //console.log("???",this.props)
        return(
            <div>
            <p>
                Clicked: {counter} times
                {'  '}
                <button onClick={increment}>+</button>
                {'  '}
                <button onClick={decrement}>-</button>
                {'  '}
                <button onClick={incrementIfOdd}>increment if odd </button>
                {'  '}
                <button onClick={()=>incrementAsync()}>increment async</button>
            </p>
                <ul>
                    <li>1</li>
                </ul>
            </div>

        )
    }
}

Counter.propTypes = {
    increment:PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    counter:PropTypes.number.isRequired,
    posts: PropTypes.array.isRequired,
    //testFetch:PropTypes.func.isRequired
}

export default Counter