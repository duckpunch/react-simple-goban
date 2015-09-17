import React from 'react';


export default React.createClass({
    propTypes: {
        manager: React.PropTypes.shape({
            move: React.PropTypes.func.isRequired,
        }).isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
        stone: React.PropTypes.string.isRequired,
        topEdge: React.PropTypes.bool,
        bottomEdge: React.PropTypes.bool,
        leftEdge: React.PropTypes.bool,
        rightEdge: React.PropTypes.bool,
        starPoint: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            x: -1,
            y: -1,
            stone: '',
            topEdge: false,
            bottomEdge: false,
            leftEdge: false,
            rightEdge: false,
            starPoint: false,
        };
    },

    clicked() {
        if (this.props.stone === '') {
            this.props.manager.move(this.props.x, this.props.y);
        }
    },

    render() {
        let classes = this.props.stone;
        classes += this.props.topEdge ? ' top-edge' : '';
        classes += this.props.bottomEdge ? ' bottom-edge' : '';
        classes += this.props.leftEdge ? ' left-edge' : '';
        classes += this.props.rightEdge ? ' right-edge' : '';
        classes += this.props.starPoint ? ' star-point' : '';
        classes += ' position';
        return <div className={classes} onClick={this.clicked}></div>;
    },
});
