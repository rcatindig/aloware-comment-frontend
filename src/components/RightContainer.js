import React, {Component} from "react";

class RightContainer extends Component {
    render() {
        const { children } = this.props;

        return(
            <div className="rightcolumn">
                {children}
            </div>
        )
    }
}

export {RightContainer};