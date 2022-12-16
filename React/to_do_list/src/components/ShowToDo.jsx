import React from 'react';

const ShowTodo = (props) => {
    const {oneTodo, i, list, setList} = props;

    const handleDelete = (delIdx) => {
        const newList = list.filter((oneTodo,i) => {
            return delIdx!==i;
            });
        setList(newList);
    }

    const handleToggleComplete =(updIdx) => {
        const newList = list.map((oneTodo, i) => {
            if(updIdx === i){
                oneTodo.isCompleted = !oneTodo.isCompleted; 
            }
            return oneTodo;
        });
        setList(newList);
    }

    return (
        <div key={i}>
            <span
            style = {oneTodo.isCompleted ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{i+1}. {oneTodo.text}</span>
            <input type="checkbox" checked={oneTodo.isCompleted} onChange={(e)=>{handleToggleComplete(i)}}/>
            <button onClick={(e) => handleDelete(i)} style={{marginLeft: '10px'}}>Delete</button>
        </div>
        );
}

export default ShowTodo;