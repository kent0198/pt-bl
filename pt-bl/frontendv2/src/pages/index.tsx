import React from 'react'
import {css} from "@emotion/css"
import {ArticleList} from "../components/ArticleList"


import {designPaternsData} from "../data"


export default function Index() 
{
  return (
    <div className={divdau}>
      <section className={sSection} style={{background:"#f1f5f9"}}>
          <div className={sSectionContainer}>
              <h2 className={sSectionHearder}>
                    Creational Patterns
              </h2>
              <span className={sSpace}/>
                <ArticleList data={designPaternsData.creational}/>
          </div>
      </section>  
      <div className={noname}/>    

      <section className={sSection} style={{ background: "#e6f2ff" }}>
            <div className={sSectionContainer}>
                <h2 className={sSectionHearder}>
                  Structural Patterns
                </h2>
                <span className={sSpace}/>
                    <ArticleList data={designPaternsData.structural}/>
            </div>
      </section>

      <section className={sSection} style={{ background: "#e4e4e4" }}>
            <div className={sSectionContainer}>
                <h2 className={sSectionHearder}>
                    Behavioral Patterns
                </h2>
                <span className={sSpace}/>
                    <ArticleList data={designPaternsData.behavioral}/>
            </div>
      </section>

    </div>
  )
}

const sSection =css`
    padding:2.3rem 0 3.5rem ;
`
const sSectionContainer=css`
   font-family: "Inter",Arial,sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`
const sSectionHearder=css`
   max-width: 960px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const sSpace=css`
  
`
const noname=css`
  height: 2px;
  background: #fff;
`
const divdau=css`
  min-width: 580px;
`
