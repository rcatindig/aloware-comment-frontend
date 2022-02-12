import React, {Component} from "react";

class PopularPost extends Component {
    render() {
        const { title } = this.props;

        return(
            <div className="card">
                <h3>Popular Post</h3>
                <div className="fakeimg">Image</div><br />
                <div className="fakeimg">Image</div><br />
                <div className="fakeimg">Image</div>
            </div>
        )
    }
}

export {PopularPost};