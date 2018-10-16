import React, {Component} from 'react';
import Page from '../components/Page';
import VideoBackground from '../components/VideoBackground';
import FirstContent from '../components/FirstContent';
import SecondContent from '../components/SecondContent';
import ThirdContent from '../components/ThirdContent';
import FourthContent from '../components/FourthContent';
import FifthContent from '../components/FifthContent';
import SixthContent from '../components/SixthContent';
import SeventhContent from '../components/SeventhContent';
import EighthContent from '../components/EighthContent';
import NinthContent from '../components/NinthContent';
import TenthContent from '../components/TenthContent';

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
                <SeventhContent/>
                <EighthContent/>
                <NinthContent/>
                <TenthContent/>
            </Page>
        );
    }
}

export default App;
