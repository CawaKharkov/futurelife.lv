import React, {Component} from 'react';
import {connect} from 'react-redux';
import './FourthContent.less';
import left from '../assets/images/left.svg';
import right from '../assets/images/right.svg';

class FourthContent extends Component {
    state = {
        currentPage: 1,
    };

    componentDidMount() {
        this.resetInterval();
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    resetInterval = () => {
        this._interval = setInterval(this.right, 4000);
    };

    left = () => {
        let currentPage = this.state.currentPage - 1;
        if (currentPage < 1) {
            currentPage = this.props.content.gallery.length;
        }
        this.setState({currentPage});
    };

    right = () => {
        let currentPage = this.state.currentPage + 1;
        if (currentPage > this.props.content.gallery.length) {
            currentPage = 1;
        }
        this.setState({currentPage});
    };

    handleLeft = (e) => {
        e.preventDefault();
        this.left();
        clearTimeout(this._timeout);
        this._timeout = setTimeout(() => this.resetInterval(), 4000);
        clearInterval(this._interval);
    };

    handleRight = (e) => {
        e.preventDefault();
        this.right();
        clearTimeout(this._timeout);
        this._timeout = setTimeout(() => this.resetInterval(), 4000);
        clearInterval(this._interval);
    };

    render() {
        return (
            <div className='FourthContent'>
                <div className='FourthContent-Gallery'
                     style={{width: (this.props.content.gallery.length * 100) + 'vw'}}
                >
                    {this.props.content.gallery.map((item, i) => (
                        <div className='FourthContent-Gallery-Item'
                             key={`gallery-item:${i}`}
                             style={{
                                 backgroundImage: `url(${item.src})`,
                                 marginLeft: -((this.state.currentPage - 1) * 100) + 'vw'
                             }}
                        />
                    ))}
                </div>

                <div className='FourthContent-Controls'>
                    <a href='#' onClick={this.handleLeft}>
                        <img src={left} alt=''/>
                    </a>
                    <p>{this.state.currentPage} / {this.props.content.gallery.length}</p>
                    <a href='#' onClick={this.handleRight}>
                        <img src={right} alt=''/>
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: state.page.locale,
    content: state.page.content.fourth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FourthContent);
