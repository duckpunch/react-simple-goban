import React from 'react';
import godash from 'godash';
import {map, range} from 'lodash';

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

    isStarPoint(x, y) {
        if (this.state.board.board_size === 19) {
            const x_star = x === 3 || x === 9 || x === 15;
            const y_star = y === 3 || y === 9 || y === 15;
            return x_star && y_star;
        } else {
            return false;
        }
    },

    renderRow(row_index) {
        const manager = this.props.manager;
        const top_edge = row_index === 0;
        const bottom_edge = row_index + 1 === this.state.board.board_size;
        return map(
            range(this.state.board.board_size),
            i => <Position
                key={i+','+row_index} x={i} y={row_index} manager={manager}
                starPoint={this.isStarPoint(i, row_index)}
                topEdge={top_edge} bottomEdge={bottom_edge}
                leftEdge={i === 0} rightEdge={i + 1 === this.state.board.board_size}
                stone={this.state.board.positions.get(godash.position(i, row_index), '')}/>
        );
    },

    render() {
        const board = this.state.board;
        const rows = [];
        for (var i = 0; i < board.board_size; i++) {
            rows.push(<div key={'row' + i} className='row'>{this.renderRow(i)}</div>);
        }
        return <div>{rows}</div>;
    },
});
