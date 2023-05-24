import React from 'react'

const Header = () => {
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-8' src="https://www.kindpng.com/picc/m/160-1608917_white-hamburger-menu-svg-hd-png-download.png" alt="White Hamburger Menu Svg, HD Png Download@kindpng.com"></img>
                <img className='ml-2 h-8' src='https://w7.pngwing.com/pngs/362/340/png-transparent-youtube-logo-streaming-media-youtube-logo-television-text-trademark-thumbnail.png' alt='youtube-logo'></img>
            </div>

            <div className='col-span-10 justify-evenly px-10'>
                <input type="text" className='w-1/2 border border-gray-400 p-2 rounded-l-full' />
                <button type='button' className='border border-gray-400 p-2 rounded-r-full'> 🔍 </button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png" alt="No Profile Picture Icon Circle - Member Icon Png, Transparent Png@kindpng.com"></img>
            </div>
        </div>
    )
}

export default Header