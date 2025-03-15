import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log(state)
    return {
      tasks: state.tasks,
    };
};

const mapDispatchToProps = (dispatch) => ({
    toggleTask: (id) => dispatch({ type: 'TOGGLE_TASK', payload: id }),
    deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id }),
});


function TasksList({ tasks, toggleTask, deleteTask }) {

    return (
    <>
        <div className="list">
            {tasks && tasks.map((t, idx) => {
                return <div key={idx}>
                    <input onChange={()=> toggleTask(t.id)} type="checkbox" checked={t.isDone}/>
                    <span>{t.text}</span>
                    <a onClick={(e) => deleteTask(t.id)}>x</a>
                </div>
            })}
            {tasks && tasks.length === 0 && 
                <p className='empty'>list is empty</p>
            }
        </div>
    </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);