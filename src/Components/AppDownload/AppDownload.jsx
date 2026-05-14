import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p> For Better experience <br/> Download APp</p>
        <div className='app-download-platforms'>
            <img src={assets.google_play_Store_icon} alt="Google Play Store" />
            <img src={assets.apple_App_Store_icon} alt="Apple App Store" />
        </div>
    </div>
  )
}

export default AppDownload

