import React, {Component} from 'react';
import {connect} from 'react-redux';

class FifthContent extends Component {
    render() {
        return (
            <p>Gallery</p>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FifthContent);
