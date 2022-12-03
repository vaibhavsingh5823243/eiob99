import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoPalyer() {
    return (
        <ReactPlayer
            className='react-player'
            url={`http://ik.imagekit.io/demo/sample-video.mp4`}
            controls={true}
        />
    )
}
