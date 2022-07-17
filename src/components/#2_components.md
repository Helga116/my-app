import React, { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0)
    // const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])//#1

    // const x = <h1>'empty'</h1>
    const formatCount = () => {
        return count === 0 ? <h6>empty</h6> : count
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }

    const handleIncrement = () => {
        setCounter((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        setCounter((prevState) => prevState - 1)
    }

    // const handleTagChange = (id) => {
    //     // setTags(['tag4', 'tag5']);
    //     setTags((prevState) => prevState.filter((tag) => tag !== id))
    //     console.log(id)
    // } // #1

    // const renderTags = () => {
    //     return (
    //         tags.length !== 0 &&
    //         tags.map((tag) => (
    //             <li
    //                 key={tag}
    //                 className="btn btn-primary btn-sm m-2"
    //                 onClick={() => handleTagChange(tag)}
    //             >
    //                 {tag}
    //             </li>
    //         ))
    //     )
    // } // #1

    // if (tags.length !== 0) {
    //     return <ul>{renderTags()}</ul>
    // } // #1

    return (
        <>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}
            >
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleDecrement}
            >
                -
            </button>
        </>
    )
}

export default Counter
// <h1>{count}</h1> с помощью такой записи мы можем вставлять js выражения, функции и переменные