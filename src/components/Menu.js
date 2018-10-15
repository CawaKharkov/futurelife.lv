import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../assets/images/logo.png';
import './Menu.less';

class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                {this.props.menu.map((item, i) => (
                    <div className='Menu-Item' key={`menu-item:${i}`}>
                        <a className='Menu-Item__Link' href='#'>
                            <span className='Menu-Item__Text'>
                                {item.title[this.props.locale]}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    menu: state.page.menu
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
