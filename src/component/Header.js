import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/">토익 영단어(고급)</Link>
                {/* <a href="/">토익 영단어(고급)</a> */}
            </h1>
            <div className="menu">
                <button>
                    <Link to="/create_word" className="link">
                        단어 추가
                    </Link>
                </button>
                <button>
                    <Link to="/create_day" className="link">
                        DAY 추가
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Header
