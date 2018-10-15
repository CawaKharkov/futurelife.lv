import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../assets/images/logo.png';
import './Logo.less';

class Logo extends Component {
    render() {
        return (
            <div className='Logo'>
                <img className='Logo-Image' src={logo} alt={this.props.title}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.page.title
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
