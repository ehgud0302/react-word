import React from 'react'
import { useHistory } from 'react-router'
import useFetch from '../hooks/useFetch'

const CreateDay = () => {
    const days = useFetch("http://localhost:3001/days")
    const history = useHistory();

    function addDay() {
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',    //Json형태로 보낼것 
            },
            body: JSON.stringify({
                day: days.length + 1,
                isDone: false
            }),
        }).then(res => {
            if (res.ok) {
                alert("DAY가 추가되었습니다.");
                history.push(`/`)            //해당 페이지로 넘어간다.  
            }
        })
    }
    return (
        <div>
            <h3>현재 일수  :  DAY{days.length}</h3>
            <button onClick={addDay}>DAY 추가</button>
        </div>
    )
}

export default CreateDay
