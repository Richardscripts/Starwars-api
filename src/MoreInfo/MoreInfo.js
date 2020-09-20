import React from 'react';
import './MoreInfo.css';
import INFO from '../INFO';
import loopThroughInfo from '../HelperFunctions/loopThroughInfo';

export default function MoreInfo(props) {
  return (
    <section>
      <ul>{loopThroughInfo(INFO, props.selectInput)}</ul>
    </section>
  );
}
