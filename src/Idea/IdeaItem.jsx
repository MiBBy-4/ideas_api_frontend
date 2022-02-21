import React from 'react';
import { Link } from 'react-router-dom';
import { changeNumberOfViews } from '../apiRequests/IdeasRequests';

export default function IdeaItem(props) {
  const { item: { id } } = props;
  const { item: { name } } = props;
  const { item } = props;
  const ideaURL = `/ideas/${id}`;

  async function handleClick() {
    const response = await changeNumberOfViews(item);
  }

  return (
    <div>
      <li><Link to={ideaURL} onClick={() => handleClick()}>{name}</Link></li>
    </div>
  );
}
