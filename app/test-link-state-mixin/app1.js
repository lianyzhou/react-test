var React = require("react");
var App1 = React.createClass({
    render : function() {
        return (
            <div>
                <input type="text" defaultValue="test"/> aaa
                <input type="checkbox" defaultChecked={true}/> bbb
            </div>
        );
    }
});

module.exports = App1;