import React, { useState } from 'react';
import ShowTodo from './ShowToDo';

const ToDo = () => {
    const [toDo, setToDo] = useState("");
    const[list, setList] = useState([]);

    const handleTodo = (e) => {
        e.preventDefault();
        if(toDo.length === 0){
            return;
        }
        let newToDo = {
            text: toDo,
            isCompleted : false
        }
        setList([...list,newToDo]);
        setToDo("");
    }

    return (
        <>
            <form onSubmit={handleTodo}>
                <input type="text" onChange={(e) => setToDo(e.target.value)} value={toDo}/>
                <input type="submit" value="Add" style={{marginLeft: '10px'}}/>
            </form>
            <hr />
            {
                list.map((oneTodo, i) => <ShowTodo oneTodo={oneTodo} i={i} list={list} setList={setList} />)
            }
        </>
    )
}

export default ToDo;