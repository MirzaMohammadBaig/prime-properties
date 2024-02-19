import Button from '../components/Button';
import Panel from '../components/Panel';
import { useReducer } from 'react';
import { produce } from 'immer'; 

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        default:
            // return; or error
            throw new Error('Unexpected action type: ' + action.type);
    }
};

function CounterPageReducer({ initialCount }) {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });

    const handleChange = (evt) => {
        const value = parseInt(evt.target.value) || 0;
        
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    };
    const incrementCount = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });
    };

    const decrementCount = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    };

    return(
        <Panel className='m-3'>
            <h1 className='text-lg m-3'>Counter is {state.count}</h1>
            <div className='flex flex-wrap m-3'>
                <Button className='hover:bg-gray-100' onClick = {incrementCount}>Increment</Button>
                <Button className='hover:bg-gray-100' onClick = {decrementCount}>Decrement</Button>
            </div>
            <Panel className='m-3 w-fit'>
                <form onSubmit={handleSubmit}>
                    <label>Add a lot!</label>
                    <hr />
                    <input onChange={handleChange} value={state.valueToAdd || ''} type="number" className='m-3 p-1 bg-gray-50 border border-gray-300'/>

                    <Button secondary outline className='m-3 hover:bg-gray-300'>Add</Button>
                </form>
            </Panel>
        </Panel>
    );
}

export default CounterPageReducer;