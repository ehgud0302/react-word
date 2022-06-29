import React from 'react'

const Hello = () => {

    //함수
    function showName(){
        console.log("이범기")
    }
    function showAge(age){
        console.log(age)
    }
    function showText(e){
        console.log(e.target.value)
    }

    //JSX
    return (
        <div>
        <h1>빠밤기</h1>
        <button onClick={showName}>showName</button>
        <button onClick={
            () => {
                showAge(25);
            }
        }>showAge</button>
        <input type="text" onChange={showText}></input>

        </div>
    )
    
}

export default Hello
