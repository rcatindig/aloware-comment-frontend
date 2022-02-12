import React, {Component} from "react";

class FollowMe extends Component {
    render() {
        const { title } = this.props;

        return(
              <div className="card">
                <h3>Follow Me</h3>
                <p>Some text..</p>
              </div>
        )
    }
}

export {FollowMe};