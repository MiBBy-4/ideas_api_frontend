import React, { component } from "react"

export default function IdeaItem(props)
{
  return(
    <li>{ props.item.name }</li>
  )
}