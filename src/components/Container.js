import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Container.less';

class Container extends Component {
    static propTypes = {
        hasWhiteBackground: PropTypes.bool,
    };

    static defaultPropTypes = {
        hasWhiteBackground: false,
    };

    render() {
        return (
            <div className={classnames({
                'Container-Wrapper': true,
                'Container-Wrapper_White-Background': this.props.hasWhiteBackground,
            })}>
                <div className='Container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Container;
