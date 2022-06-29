import React from 'react'
import { useState } from 'react'

const Word = ({ word: w }) => {   /// props로 넘어온 변수 word를 w로 사용한다는 말이다.
    const [word, setWord] = useState(w)
    const [isShow, setIsShow] = useState(false)
    const [isDone, setIsDone] = useState(word.isDone)                  /// isDone 을 word.isDone으로 설정해준다.

    function toggleShow() {
        setIsShow(!isShow)
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',    //Json형태로 보낼것 
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        })

    }

    function del() {
        if (window.confirm('삭제하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            })
        }
    }

    if (word.id === 0) {
        return null;
    }


    return (
        <tr className={isDone ? "off" : " "}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>   {/* isShow 가 True이면 보여준다. */}
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? " 숨기기" : " 보기"}</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}

export default Word
