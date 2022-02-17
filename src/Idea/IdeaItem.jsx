import React from 'react';
import { Link } from 'react-router-dom';

export default function IdeaItem(props) {
  const ideaURL = `/ideas/${props.item.id}`;
  return (
    <div>
      <li><Link to={ideaURL}>{props.item.name}</Link></li>
    </div>
  );
}
