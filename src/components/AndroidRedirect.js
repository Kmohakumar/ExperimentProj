
import React, {useEffect} from 'react'

function AndroidRedirect() {
    useEffect(() => {
        const isAndroid = /android/i.test(navigator.userAgent);
        if (isAndroid) {
          window.location.href = "https://play.google.com/store/apps/details?id=com.furrl.flutter_app";
        } else {
          window.location.href = "https://apps.apple.com/in/app/furrl/id1640235949";
        }
      }, []);
  return (
    <div>AndroidRedirect</div>
  )
}

export default AndroidRedirect