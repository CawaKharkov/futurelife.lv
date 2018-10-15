import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import largeLogo from '../assets/images/large-logo.png';
import './FirstContent.less';

class FirstContent extends Component {
    render() {
        return (
            <Container>
                <div className='FirstContent'>
                    <div className='FirstContent-Logo'>
                        <img src={largeLogo} alt={this.props.content.title[this.props.locale]} width={503} height={362}/>
                    </div>

                    <div className='FirstContent-Content'>
                        <div className='FirstContent-Content-Space'/>

                        <div>
                            {this.props.content.title[this.props.locale]}
                        </div>

                        <img src={this.props.content.elkor} alt={this.props.content.title[this.props.locale]} width={212} height={82}/>

                        <a className='FirstContent-Submit' href='#' target='_blank'>
                            {this.props.content.submit[this.props.locale]}
                        </a>

                        <div className='FirstContent-Content-Space'/>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.first,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FirstContent);
