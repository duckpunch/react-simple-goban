import React from 'react';
import godash from 'godash';

import Board from './Board.jsx';


export default class {
    constructor(size, dom_node) {
        this.board = godash.Board(size);
        this.callback = function() {};
        this.last_move_black = false;

        React.render(<Board manager={this} />, dom_node);
    }

    register(callback) {
        this.callback = callback;
    }

    move(x, y) {
        if (this.last_move_black) {
            this.board = this.board.addWhiteMove(godash.position(x, y));
        } else {
            this.board = this.board.addBlackMove(godash.position(x, y));
        }
        this.last_move_black = !this.last_move_black;
        this.callback(this.board);
    }
}
