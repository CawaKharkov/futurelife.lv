import React, {Component} from 'react';
import PageHeader from './PageHeader';

class Page extends Component {
    render() {
        return (
            <div className='Page'>
                <PageHeader/>

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Page;
