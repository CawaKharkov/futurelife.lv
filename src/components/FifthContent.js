import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from "./Container";
import './FifthContent.less';

class FifthContent extends Component {
    render() {
        return (
            <div className='FifthContent'>
                <Container>
                    <div className='FifthContent-Title'>
                        {this.props.content.title[this.props.locale]}
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.fifth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FifthContent);
