import useFetch from '../hooks/useFetch'
import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router'

const CreateWord = () => {

    const engRef = useRef(null)                 //돔의 위치를 확인할 수 있다!
    const korRef = useRef(null)
    const dayRef = useRef(null)

    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true)
            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',    //Json형태로 보낼것 
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성이 완료되었습니다~~~");
                    history.push(`/day/${dayRef.current.value}`)            //해당 페이지로 넘어간다.  
                    setIsLoading(false)
                }
            })
        }
    }

    return (
        <form>
            <div className="input_area">
                <label>ENG</label>
                <input type="text" placeholder="computer" ref={engRef}></input>
            </div>

            <div className="input_area">
                <label>KOR</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}></input>
            </div>

            <div className="input_area" >
                <label>DAY</label>
                <select ref={dayRef}>
                    {days.map(day =>
                    (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={
                {
                    opacity: isLoading ? 0.3 : 1,
                }
            } onClick={onSubmit}>{isLoading ? "Saving...." : "저장"}</button>
        </form>
    )
}

export default CreateWord
