import React, {Component} from "react";

class Content extends Component {
    render() {
        const { children } = this.props;

        return(
            <div className="row">
                {children}
            </div>
        )
    }
}

export {Content};