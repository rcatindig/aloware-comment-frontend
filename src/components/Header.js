import React, {Component} from "react";

class Header extends Component {
    render() {
        const { title } = this.props;

        return(
            <div className="header">
                <h2>{title}</h2>
            </div>
        )
    }
}

export {Header};