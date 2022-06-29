import React from 'react'
import {useState} from 'react'
import Username from './Username';


const State = (props) => {
        console.log(props)
    
    // props.age = 100;
        // let name = "Mike";
        const [name,setName] = useState('Mike');
        const [age,setAge] = useState(props.age);
        const msg = age > 19 ? "성인입니다." : "미성년자 입니다."

    function changeName () {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName)
        setAge(age+1)
    }
    // name = name === "Mike" ? "Jane" : "Mike";
        // console.log(name)
        // document.getElementById("name").innerText = name; // 업데이트를 위해 바닐라 JS 사용
    // 이러한 점을 보안하기 위해 모든 컴포넌트를 함수형으로 표현하여 Hooks 기능을 사용

    return (
        <div>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <Username name={name}></Username>
            <button onClick={changeName}>Change</button>
        </div>
    


    )

}

export default State
