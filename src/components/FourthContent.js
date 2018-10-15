import React, {Component} from 'react';
import {connect} from 'react-redux';

class FourthContent extends Component {
    render() {
        return (
            <p>Gallery</p>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FourthContent);
