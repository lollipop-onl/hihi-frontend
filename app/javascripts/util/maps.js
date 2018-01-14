import GoogleMapsLoader from 'google-maps';

class Maps {
  constructor () {
    GoogleMapsLoader.KEY = 'AIzaSyCoGjWW556lfx7mW_tXDIMYe1GYOsaRSiY';
    GoogleMapsLoader.LIBRARIES = ['geometry'];
  }

  /**
   * GoogleMapsを取得する
   */
  getMaps () {
    return new Promise((resolve) => {
      console.log('run');
      GoogleMapsLoader.load((google) => {
        console.log('load!');
        resolve(google);
      });
    });
  }

  /**
   * GoogleMapsのインスタンスを取得する
   */
  getInstance () {
    return new Promise((resolve) => {
      if (this._google) {
        resolve(this._google);
      } else {
        GoogleMapsLoader.load((google) => {
          this._google = google;
          resolve(this._google);
        });
      }
    });
  }
}

export default new Maps();
