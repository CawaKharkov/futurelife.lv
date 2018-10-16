import React, {Component} from 'react';
import PageHeader from './PageHeader';
import PageFooter from '../components/PageFooter';

class Page extends Component {
    render() {
        return (
            <div className='Page'>
                <PageHeader/>

                <div>
                    {this.props.children}
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default Page;
