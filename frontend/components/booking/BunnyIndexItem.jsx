var React = require('react');

var BunnyIndexItem = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.updateBunny(this.props.bunny.id);
    this.props.nextStage(e);
  },
  render: function () {
    var bunny = this.props.bunny;

    return(
      <form onSubmit={this.handleSubmit}>
        <div className="bunny-media">
          <img src={bunny.user.image_url}/>
          <input className="submit" type="submit" value="Select & Continue"/>
          <a href={"#/bunny?" + bunny.id}>Profile</a>
        </div>
        <div className="bunny-content">
          <h1>{bunny.user.name}</h1>
          <h4>How I can help:</h4>
          <p>{bunny.user.blurb}</p>
        </div>
      </form>
    )
  }
});

module.exports = BunnyIndexItem;
