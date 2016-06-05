var React = require('react');

var BookingIndexItem = React.createClass({
  render: function () {
    return(
      <div className="booking-item group">
        <img src={this.props.bookingDetails.bunny.image_url}/>
        <h1>{this.props.bookingDetails.bunny.name}</h1>
        <button onClick={this.props.removeBooking} value={this.props.bookingDetails.id}>Cancel Booking</button>
      </div>
    );
  }
});

module.exports = BookingIndexItem;
