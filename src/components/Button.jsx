import React from 'react'
import comments from './CommentCard.module.css'

export default function Button({handleClick, selection, children}) {
    return (
        <button className={selection==children ? comments.selection:undefined} onClick={handleClick}>{children}</button>
    )

}