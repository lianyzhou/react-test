var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var App3 = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState : function() {
        return {
            message : "hello",
            checkbox : true,
            radioa : true,
            radiob : false,
        };
    },
    render : function() {
        return (
            <div>
                <input type="text" valueLink={this.linkState("message")}/>
                {this.state.message} aaa
                <input type="checkbox" checkedLink={this.linkState("checkbox")}/>
                {this.state.checkbox ? 'checked' : 'unchecked'} bbb
            </div>
        );
    }
});

module.exports = App3;