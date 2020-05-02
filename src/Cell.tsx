import React from 'react';

type Props={
    value: string
}

export const Cell = ({value}: Props) =>{
    return(
        <div>{value}</div>
    )
}
