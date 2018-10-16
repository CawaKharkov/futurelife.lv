import React, {Component} from 'react';
import Container from './Container';
import Logo from './Logo';
import Socials from './Socials';
import NextLocale from './NextLocale';
import './PageFooter.less';

class PageFooter extends Component {
    handleTop = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <Container hasWhiteBackground>
                <div className='PageFooter'>
                    <div className='PageFooter-Logo'>
                        <Logo/>
                    </div>

                    <div className='PageFooter-Menu'>
                        <a href='#' onClick={this.handleTop}>TOP</a>
                    </div>

                    <div className='PageFooter-Socials'>
                        <Socials/>
                    </div>

                    <div className='PageFooter-NextLocale'>
                        <NextLocale/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default PageFooter;
