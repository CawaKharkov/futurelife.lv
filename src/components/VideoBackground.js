import React, {Component} from 'react';
import YouTube from 'react-youtube';
import './VideoBackground.less';

class VideoBackground extends Component {
    render() {
        return (
            <div className='VideoBackground'>
                <div className='VideoBackground-Video'>
                    <YouTube 
                        videoId='tgbNymZ7vqY'
                        opts={{
                            height: '100%',
                            width: '100%',
                            playerVars: {
                                autohide: 1,
                                autoplay: 1,
                                controls: 0,
                                html5: 1,
                                loop: 1,
                                playsinline: 1,
                                rel: 0,
                                showinfo: 0,
                                theme: 'dark',
                                vq: 320,
                                wmode: 'opaque',
                            },
                        }}
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
