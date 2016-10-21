/**
 * Created by dantegg on 16/9/8.
 */
import {bindActionCreators} from  'redux'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
    return{
        counter:state.counter,
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)