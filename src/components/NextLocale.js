import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeLocale} from '../actions';
import './NextLocale.less';

class NextLocale extends Component {
    handleClick = () => {
        this.props.changeLocale(this.props.nextLanguage[this.props.locale].code);
    };

    render() {
        return (
            <div className='NextLocale'>
                <button className='NextLocale-Button' onClick={this.handleClick}>
                    {this.props.nextLanguage[this.props.locale].title}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    nextLanguage: state.page.nextLanguage,
});

const mapDispatchToProps = (dispatch) => ({
    changeLocale: (locale) => dispatch(changeLocale(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextLocale);
