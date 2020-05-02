import React from 'react';
import {Cell} from "./Cell";
import {Grid} from "@material-ui/core";

type Props = {
    block: [[string, string, string], [string, string, string], [string, string, string]]
}

export const Block = ({block}: Props) => {
    let count = 0;
    console.log(block)
    return (<div>{
            block.map((rowInBlock) => {
                return (
                    <div>{
                        rowInBlock.map((cell, index)=>{
                            return <Cell value={cell} key={count++}/>
                        })
                    }</div>
                )
            })
        }</div>
    )
}
