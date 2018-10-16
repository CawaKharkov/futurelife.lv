import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import './SeventhContent.less';

class SeventhContent extends Component {
    render() {
        return (
            <div className='SeventhContent-Wrapper'>
                <Container>
                    <div className='SeventhContent-Title'>
                        {this.props.content.title[this.props.locale]}
                    </div>

                    <div className="SeventhContent">
                        <div className='SeventhContent-Content'>
                            <div dangerouslySetInnerHTML={{__html: this.props.content.content[this.props.locale]}}/>
                        </div>

                        <div className='SeventhContent-Hours'>
                            <div className='SeventhContent-HoursTitle'>
                                {this.props.content.hoursTitle[this.props.locale]}
                            </div>

                            <div dangerouslySetInnerHTML={{__html: this.props.content.hours[this.props.locale]}}/>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.seventh,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SeventhContent);
