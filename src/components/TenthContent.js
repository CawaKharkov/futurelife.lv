import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from './Container';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import logo from '../assets/images/large-logo.png';
import elkor from '../assets/images/elkor.png';
import './TenthContent.less';
import video1 from "../assets/videos/1.mp4";

class ThirdContent extends Component {
    render() {
        return (
            <div className='TenthContent-Wrapper'>
                <div className='TenthContent-Video' style={{zIndex: 1}}>
                    <video className='TenthContent-VideoElement'
                           src={video1}
                           autoPlay
                           loop
                           muted
                    />
                </div>

                <div style={{zIndex: 2, position: 'relative'}}>
                    <Container>
                        <div className='TenthContent'>
                            <div className='TenthContent-Image'>
                                <img src={logo} alt={this.props.content.title[this.props.locale]} width={191}
                                     height='auto'/>
                            </div>

                            <div className='TenthContent-Content'>
                                <div className='TenthContent-Info'>
                                    <div className='TenthContent-Logo'>
                                        <img src={elkor} alt={this.props.content.title[this.props.locale]} width={186}
                                             height='auto'/>
                                    </div>

                                    <div className='TenthContent-SubmitBlock'>
                                        <a className='TenthContent-Submit' href='#' target='_blank'>
                                            {this.props.content.submit[this.props.locale]}
                                        </a>
                                    </div>
                                </div>

                                <div className='TenthContent-Title'>
                                    {this.props.content.title[this.props.locale]}
                                </div>
                            </div>
                        </div>

                        <div className='TenthContent-Map'>
                            <Map center={this.props.content.map.center} zoom={13}>
                                <TileLayer
                                    url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
                                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                />

                                <Marker position={this.props.content.map.position}/>
                            </Map>

                            <div className='TenthContent-MapContent'>
                                <div>
                                    {this.props.content.map.info[this.props.locale]}
                                </div>

                                <div className='TenthContent-MapContent-Address'
                                     dangerouslySetInnerHTML={{__html: this.props.content.map.address[this.props.locale]}}/>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.tenth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdContent);
