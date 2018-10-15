import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import book from '../assets/images/book.jpg';
import './ThirdContent.less';

class ThirdContent extends Component {
    render() {
        return (
            <div className='ThirdContent-Wrapper'>
                <Container>
                    <div className='ThirdContent'>
                        <div className='ThirdContent-Content'>
                            <div className='ThirdContent-Title'>
                                {this.props.content.title[this.props.locale]}
                            </div>

                            <div className='ThirdContent-Content'>
                                <div dangerouslySetInnerHTML={{__html: this.props.content.content[this.props.locale]}}/>
                            </div>
                        </div>

                        <img className='ThirdContent-Image' src={book} alt={this.props.content.title[this.props.locale]} width={337} height={477}/>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.third,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdContent);
