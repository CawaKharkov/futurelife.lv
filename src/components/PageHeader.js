import React, {Component} from 'react';
import Container from './Container';
import Logo from './Logo';
import Menu from './Menu';
import Socials from './Socials';
import NextLocale from './NextLocale';
import './PageHeader.less';

class PageHeader extends Component {
    render() {
        return (
            <Container hasWhiteBackground>
                <div className='PageHeader'>
                    <div className='PageHeader-Logo'>
                        <Logo/>
                    </div>

                    <div className='PageHeader-Menu'>
                        <Menu/>
                    </div>

                    <div className='PageHeader-Socials'>
                        <Socials/>
                    </div>

                    <div className='PageHeader-NextLocale'>
                        <NextLocale/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default PageHeader;
