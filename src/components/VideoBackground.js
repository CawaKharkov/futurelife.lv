import React, {Component} from 'react';
import './VideoBackground.less';
import video1 from '../assets/videos/1.mp4';

class VideoBackground extends Component {
    render() {
        return (
            <div className='VideoBackground'>
                <div className='VideoBackground-Video'>
                    <video className='VideoBackground-VideoElement'
                           src={video1}
                           autoPlay
                           loop
                           muted
                    />
                </div>

                <div className='VideoBackground-Content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default VideoBackground;
