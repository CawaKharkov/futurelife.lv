import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import sixth from '../assets/images/sixth.png';
import bg from '../assets/images/sixth-bg.png';
import './SixthContent.less';

class SixthContent extends Component {
    render() {
        return (
            <div className='SixthContent-Wrapper' style={{backgroundImage: `url(${bg})`}}>
                <Container>
                    <div className='SixthContent'>
                        <div className='SixthContent-Content'>
                            <div className='SixthContent-Title'>
                                {this.props.content.title[this.props.locale]}
                            </div>

                            <div className='SixthContent-Content'>
                                {this.props.content.content[this.props.locale]}
                            </div>

                            <a className='SixthContent-Submit' href='#' target='_blank'>
                                {this.props.content.submit[this.props.locale]}
                            </a>
                        </div>

                        <img className='SixthContent-Image' src={sixth} alt={this.props.content.title[this.props.locale]} width={362} height={381}/>
                    </div>

                    <div className='SixthContent-Prices'>
                        {this.props.content.prices.map((item, i) => (
                            <div className='SixthContent-Price' key={`price:${i}`}>
                                <div className='SixthContent-Price-Title'>
                                    {item.title[this.props.locale]}
                                </div>

                                {item.children.map((cost, j) => (
                                    <div className='SixthContent-Price-Cost' key={`price:${i}:${j}`}>
                                        <div className='SixthContent-Price-Cost-Title'>
                                            {cost.title[this.props.locale]}
                                        </div>

                                        <div className='SixthContent-Price-Amount'>
                                            {cost.cost}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.sixth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SixthContent);
