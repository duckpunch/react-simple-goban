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
        const drawing = [];
        if (!this.props.bottomEdge) {
            drawing.push(<line x1='15' y1='15' x2='15' y2='30' stroke='black' key='bottom'/>);
        }
        if (!this.props.topEdge) {
            drawing.push(<line x1='15' y1='0' x2='15' y2='15' stroke='black' key='top'/>);
        }
        if (!this.props.leftEdge) {
            drawing.push(<line x1='0' y1='15' x2='15' y2='15' stroke='black' key='left'/>);
        }
        if (!this.props.rightEdge) {
            drawing.push(<line x1='15' y1='15' x2='30' y2='15' stroke='black' key='right'/>);
        }
        if (this.props.starPoint) {
            drawing.push(<rect x='12' y='12' width='6' height='6' key='star'/>);
        }
        if (this.props.stone) {
            drawing.push(<circle cx='15' cy='15' r='13' className='stone-border' key='stone-border'/>);
            drawing.push(<circle cx='15' cy='15' r='12' className={this.props.stone} key='stone'/>);
        } else {
            drawing.push(<circle cx='15' cy='15' r='13' className='hover' key='stone-hover'/>);
        }

        return (<svg className='position' onClick={this.clicked}>
            {drawing}
        </svg>);
    },
});
