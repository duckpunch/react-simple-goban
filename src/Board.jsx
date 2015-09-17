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

    renderRow(row_index) {
        const manager = this.props.manager;
        return map(
            range(this.state.board.board_size),
            i => <Position
                key={i+','+row_index}
                x={i} y={row_index} manager={manager}
                stone={this.state.board.positions.get(godash.position(i, row_index), '')}/>
        );
    },

    render() {
        const board = this.state.board;
        const rows = [];
        for (var i = 0; i < board.board_size; i++) {
            rows.push(<div key={'row' + i} className="row">{this.renderRow(i)}</div>);
        }
        return <div>{rows}</div>;
    },
});
