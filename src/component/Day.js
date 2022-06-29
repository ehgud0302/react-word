import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';

import Word from './Word';

const Day = () => {
    const useparam = useParams();                   // 파라미터를 받아오는 부분
    const day = useparam.day

    const words = useFetch(`http://localhost:3001/words?day=${day}`)



    return (
        <>
            <h2>DAY</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Day
