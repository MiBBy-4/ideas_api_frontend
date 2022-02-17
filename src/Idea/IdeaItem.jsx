import React from 'react';
import {
  Link, Route, Routes,
} from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function IdeaItem(props) {
  const ideaURL = `/ideas/${props.item.id}`;
  return (
    <div>
      <li><Link to={ideaURL}>{props.item.name}</Link></li>
    </div>
  );
}
