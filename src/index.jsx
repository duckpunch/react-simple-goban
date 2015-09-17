import Position from './Position.jsx';


export default {
    makePosition(init_props, dom_node) {
        React.render(<Position {...init_props} />, dom_node);
    },
};
