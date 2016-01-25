var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"ID":1, "text":"ham"}, {"ID":2, "text":"cheese"}, {"ID":3, "text":"potatoes"}]

var List = React.createClass({
	render: function() {
		var listItems = ingredients.map(function(item){
			return <ListItem key={item.id} ingredient={item.text} />;
		});
		return (<ul>{listItems}</ul>)
	}
});

module.exports = List;