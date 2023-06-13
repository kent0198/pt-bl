import React from 'react'
import {css}  from '@emotion/css'
import { TDesignPatternData } from '@type/types'
import {ArticleItem} from './ArticleItem'

interface Prop{
    data:TDesignPatternData[]
}
export const ArticleList = (props:Prop) => {
    const {data} = props; // data dc xem nhu 1 mang nen co the dung map
  return (
    <div className={sContainer}>
        {
            data.map((item)=>(
                <ArticleItem data={item}/>
            ))
        }
    </div>
  )
}


const sContainer=css`
    display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`