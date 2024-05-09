class GoogleMapsLoader {
    static load(apiKey, callback) {
      if (window.google && window.google.maps) {
        callback();
        return;
      }
  
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMaps`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
  
      window.initGoogleMaps = () => {
        callback();
        delete window.initGoogleMaps;
      };
    }
  }
  
  export default GoogleMapsLoader;