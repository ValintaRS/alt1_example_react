import * as React from 'react';
import * as a1lib from '@alt1/base';
import { useState } from 'react';
import { CapturedImage } from '../CapturedImage';
import './CaptureContainer.scss';
import { findHomeport } from '../../utils/homeport';

export const CaptureContainer = () => {
  const [errorText, setErrorText] = useState('');
  const [homeportText, setHomeportText] = useState('-');
  const [imgSrc, setImgSrc] = useState('');

  const capture = () => {
    if (!window.alt1) {
      setErrorText('You need to run this page in alt1 to capture the screen');
      return;
    }
    if (!alt1.permissionPixel) {
      setErrorText(
        'Page is not installed as app or capture permission is not enabled'
      );
      return;
    }
    const img = a1lib.captureHoldFullRs();
    const { homeportText, imgSrc } = findHomeport(img);
    setHomeportText(homeportText);
    setImgSrc(imgSrc);
  };

  return (
    <div className="capture-container">
      {errorText && <p>{errorText}</p>}
      <p>Homeport matches: {homeportText}</p>
      <button className="capture-container__button" onClick={() => capture()}>
        Capture
      </button>
      <p>The captured image will appear here</p>
      <CapturedImage src={imgSrc} />
    </div>
  );
};
