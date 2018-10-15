import React, {Component} from 'react';
import Page from '../components/Page';
import VideoBackground from '../components/VideoBackground';
import FirstContent from '../components/FirstContent';
import SecondContent from '../components/SecondContent';
import ThirdContent from '../components/ThirdContent';
import FourthContent from '../components/FourthContent';
import FifthContent from '../components/FifthContent';
import SixthContent from '../components/SixthContent';

class App extends Component {
    render() {
        return (
            <Page>
                <VideoBackground>
                    <FirstContent/>
                </VideoBackground>

                <SecondContent/>
                <ThirdContent/>
                <FourthContent/>
                <FifthContent/>

                <VideoBackground/>

                <SixthContent/>
            </Page>
        );
    }
}

export default App;
