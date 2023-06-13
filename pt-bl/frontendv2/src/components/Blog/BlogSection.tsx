import React from 'react'
import {css} from '@emotion/css'
import { TBlogSectionData } from '@type/types'

interface Props{
    data:TBlogSectionData
}

export const BlogSection = (props:Props) => {

  const {data}=props;
  return (
    <div id={"toc"+data.header.replace(/\s/g, "_")} className={sContainer}>
        <h2 className={sHeader}>{data.header}</h2>
        {data.content}
    </div>
  )
}
const sContainer=css`
    
`
const sHeader=css`
`