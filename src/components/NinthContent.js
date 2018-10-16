import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import './NinthContent.less';

class NinthContent extends Component {
    render() {
        return (
            <div className='NinthContent-Wrapper'>
                <Container>
                    <div className='NinthContent-Title'>
                        {this.props.content.title[this.props.locale]}
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.ninth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NinthContent);
