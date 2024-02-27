import React from 'react'
import styled from 'styled-components'


const CursorPointer = styled.div.attrs(props => ({
    style: {
        left: props.x,
        top: props.y,
    }
}))`
    background-color: white;
    position: absolute;
    border-radius: 100%;
    mix-blend-mode: difference;
    width: 32px;
    height: 32px;
    transform: translate(-50%, -50%);
`

export default CursorPointer