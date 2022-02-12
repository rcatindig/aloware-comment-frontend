import React, {Component} from "react";

class AboutMe extends Component {
    render() {
        const { title } = this.props;

        return(
            <div className="card">
                <h2>About Me</h2>
                <div className="fakeimg" style={{height:100 + 'px'}}>Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
        )
    }
}

export {AboutMe};