var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var prefix = require("react-prefixr");
//在chrome35下面测试，可以看到效果。
//chrome 35的transform还需要添加-webkit-前缀
var App = React.createClass({
    getInitialState : function() {
        return {
            left : 0
        };
    },
    move : function() {
        this.setState({
            left : this.state.left === 0 ? 100 : 0
        });
    },
    render : function() {
        var style = prefix({
            transform : `translateX(${this.state.left}px)`,
            transition : 'all 0.5s ease'
        });
        return (
            <div>
                <div style={style}>Hello,World</div>
                <button onClick={this.move}>move</button>
            </div>
        );
    }
});

ReactDOM.render(<App/> , $('#app')[0]);