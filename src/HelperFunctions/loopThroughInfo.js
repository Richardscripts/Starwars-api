import React from 'react';

export default function loopThroughInfo(INFO, selectInput) {
  let list = [<h3 key={'legend'}>Legend</h3>];
  for (let i = 0; i < INFO.length; i++) {
    for (let key in INFO[i]) {
      if (key.toLowerCase() === selectInput) {
        for (let keyWithin in INFO[i][key]) {
          list.push(
            <li key={`${keyWithin}${keyWithin.length}` + i}>
              <b>{keyWithin}:</b>{' '}
              <span className='tip-text'>{INFO[i][key][keyWithin]}</span>
            </li>
          );
        }
      } else {
        if (key === 'General Info') {
          for (let keyWithin in INFO[i][key]) {
            list.push(
              <li key={keyWithin}>
                <b>{keyWithin}:</b>{' '}
                <span className='tip-text'>{INFO[i][key][keyWithin]}</span>
              </li>
            );
          }
        }
      }
    }
  }
  return list;
}
