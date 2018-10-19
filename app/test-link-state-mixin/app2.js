var React = require("react");
var App2 = React.createClass({
    getInitialState : function() {
        return {
            message : "test111",
            checkbox : true,
            gender : "male"
        };
    },
    handleChange : function(event) {
        this.setState({
            message : event.target.value
        });
    },
    handleCheckbox : function(event) {
        this.setState({
            checkbox : event.target.checked
        });
    },
    handleRadio : function(val , event) {
        if(event.target.checked) {
            this.setState({
                gender : val
            });
        }
    },
    render : function() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={this.handleChange}/>
                <span>{this.state.message}</span> aaa
                <input type="checkbox" checked={this.state.checkbox} onChange={this.handleCheckbox}/>
                <span>{this.state.checkbox?'checked':'unchecked'}</span> bbb
                <input type="radio" name="gender" checked={this.state.gender==='male'} 
                    onChange={this.handleRadio.bind(this , "male")}/>男
                <input type="radio" name="gender" checked={this.state.gender==='female'} 
                    onChange={this.handleRadio.bind(this , "female")}/>女
                <input type="radio" name="gender" checked={this.state.gender==='monster'} 
                    onChange={this.handleRadio.bind(this , "monster")}/>妖怪
                <span> {this.state.gender==='male'?'男':(this.state.gender==='monster'?'妖怪':'女')}</span>
            </div>
        );
    }
});

module.exports = App2;