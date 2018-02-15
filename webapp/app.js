import QRScanner from 'qr-code-scanner';
import Instascan from 'instascan';
import toastr from 'toastr';

document.querySelector('#knapp').addEventListener('click', () => {
  const scanner = new Instascan.Scanner({
    video: document.querySelector('#preview'),
    mirror: false
  });

  scanner.addListener('scan', function (content) {
    toastr.success(content);
  });

  Instascan.Camera.getCameras().then(function (cameras) {
    toastr.success(`Number of cameras ${cameras.length}`);

    if (cameras.length > 0) {
      scanner.start(cameras[1]).then(() => {
        toastr.success('STARTED CAMERA!');
      }).catch((e) => {
        toastr.error(e);
      });
    } else {
      toastr.error('No cameras found');
    }
  }).catch(function (e) {
    toastr.error(e);
  });
});
