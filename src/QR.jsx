import React, { useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QrScanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 9 / 16,
        disableFlip: true,
        videoConstraints: {
          facingMode: "environment"
        }
      }
    );

    return () => {
      html5QrCode.stop().then(() => html5QrCode.clear());
    };
  }, []);

  return <div id="reader" ></div>;
};

export default QrScanner;
