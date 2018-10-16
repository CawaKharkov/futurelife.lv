import React, {Component} from 'react';
import SecondContent from "./SecondContent";
import connect from "react-redux/es/connect/connect";
import bg from "../assets/images/second-bg.png";
import Container from "./Container";

class EighthContent extends SecondContent {
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
    content: state.page.content.eighth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EighthContent);
