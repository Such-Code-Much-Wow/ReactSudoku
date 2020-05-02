import React from 'react';
import {Cell} from "./Cell";

type Props = {
    rows: [[string, string, string], [string, string, string], [string, string, string]]
}

export const Block = ({rows}: Props) => {
    return (<div>{
            rows.map((cells) => {
                cells.map((cell, index)=>{
                    return <Cell value={cell} key={index}/>
                })
            })
        }</div>
    )
}
