import React, {Component} from "react";

class PostDetails extends Component {
    render() {
        const { title, datePost, contentImage, children } = this.props;

        return(
            <div className="card">
                <h2>{title}</h2>
                <h5>{datePost}</h5>
                <div className="fakeimg" style={{height:200 + 'px', background: `url('${contentImage}')`, backgroundSize: 'cover'}}></div>
                {children}
            </div>
        )
    }
}

export {PostDetails};