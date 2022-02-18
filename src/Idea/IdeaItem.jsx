import React from 'react';
import { Link } from 'react-router-dom';
import { changeNumberOfViews } from '../apiRequests/IdeasRequests';

export default function IdeaItem(props) {
  const ideaURL = `/ideas/${props.item.id}`;

  async function handleClick() {
    const response = await changeNumberOfViews(props.item);
  }

  return (
    <div>
      <li><Link to={ideaURL} onClick={() => handleClick()}>{props.item.name}</Link></li>
    </div>
  );
}
