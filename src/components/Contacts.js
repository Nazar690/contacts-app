import React from 'react';


class Contacts extends React.Component {
   render() {
      return (
            <div className="contact">
                <p className="name">{this.props.firstName} {this.props.lastName}</p>
                <p className="phone">{this.props.phone}</p>
                <button className="bnt-edit">Edit</button>
            </div>
        )
    }
}


export default Contacts;