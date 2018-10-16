import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import bg from '../assets/images/second-bg.png';
import './SecondContent.less';

class SecondContent extends Component {
    render() {
        return (
            <div className='SecondContent-Wrapper' style={{backgroundImage: `url(${bg})`}}>
                <Container>
                    <div className='SecondContent'>
                        <div className='SecondContent-Content'>
                            <div className='SecondContent-Title'>
                                {this.props.content.title[this.props.locale]}
                            </div>

                            <div className='SecondContent-Content'>
                                {this.props.content.content[this.props.locale]}
                            </div>
                        </div>

                        <img className='SecondContent-Image'
                             src={this.props.content.image}
                             alt={this.props.content.title[this.props.locale]} width={362} height={381}/>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.second,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SecondContent);
