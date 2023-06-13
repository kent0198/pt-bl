import React from 'react'
import {css} from "@emotion/css"
import { TBlogTopicData } from '@type/types'

interface Props{
    data:TBlogTopicData[];
}
export const BlogTopic = (props:Props) => {

  const {data}=props;

  return (
    <div className={sContainer}>
        {data.map((topic)=>(
            <div className={sTopicContainer} key={topic.title}>
                <div className={sTopicIcon}>{topic.icon}</div>
                <div className={sTopicName}>{topic.title}</div>
            </div>
        ))}    
    </div>
  )
}
const sContainer=css`
    
`
const sTopicContainer=css`
    
`
const sTopicIcon=css`

`
const sTopicName=css`

`