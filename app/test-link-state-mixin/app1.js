var React = require("react");
var App1 = React.createClass({
    render : function() {
        return (
            <div>
                <input type="text" defaultValue="test"/>
                <input type="checkbox" defaultChecked={true}/>
            </div>
        );
    }
});

module.exports = App1;