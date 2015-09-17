import React from 'react';
import godash from 'godash';

import Position from './Position.jsx';


export default React.createClass({
    propTypes: {
        manager: React.PropTypes.shape({
            register: React.PropTypes.func.isRequired,
        }).isRequired,
    },

    getInitialState() {
        return {board: this.props.manager.board};
    },

    componentDidMount() {
        this.props.manager.register(this.updateBoard);
    },

    updateBoard(board) {
        this.setState({board: board});
    },

    render() {
        const board = this.state.board;
        return <div>meep</div>;
    },
});
