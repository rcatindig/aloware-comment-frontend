import React, {Component} from "react";

class Footer extends Component {
    render() {
        const { title } = this.props;

        return(
            <div className="footer">
                <h2>{title}</h2>
            </div>
        )
    }
}

export {Footer};