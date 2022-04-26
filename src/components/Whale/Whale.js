import React from "react";
import { useLocation, useParams } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function () {
  // const { search } = useLocation()
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1];

  const { type } = useParams()

  return (
    <>
      <h3>Whale</h3>

      { type === 'beluga' && <Beluga/> }
      { type === 'blue' && <Blue/> }
    </>
  )
}
