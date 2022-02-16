import React from 'react';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import IdeaShow from './IdeaShow';

export default function IdeaItem(props) {
  const ideaURL = `/idea/${props.item.id}`;
  return (
    <div>
      <BrowserRouter>
        <li><Link to={ideaURL}>{props.item.name}</Link></li>
        <Routes>
          <Route
            path={'/idea/:id'}
            element={<IdeaShow item={props.item} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
