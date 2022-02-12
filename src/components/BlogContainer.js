import React, {Component} from "react";

class BlogContainer extends Component {
    render() {
        const { children } = this.props;

        return(
            <div className="leftcolumn">
                {children}
            </div>
        )
    }
}

export {BlogContainer};