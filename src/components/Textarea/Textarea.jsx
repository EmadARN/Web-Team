import React from 'react'
import { Textarea } from './style'
export default function TextArea(){
    return(
        <Textarea
        maxRows={4}
        aria-label="maximum height"
        placeholder="پیام خود را بنویسید"
        />
    )
}