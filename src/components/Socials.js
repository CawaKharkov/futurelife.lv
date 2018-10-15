import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Socials.less';

class Socials extends Component {
    render() {
        return (
            <div className='Socials'>
                {this.props.socials.map((item, i) => (
                    <button className='Socials-Item' key={`social-item:${i}`} title={item.title}>
                        {i + 1}
                    </button>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    socials: state.page.socials,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Socials);
