import React, {Component} from "react";

import * as Constants from '../helpers/Constants';

class Reply extends Component {

    constructor(props) {
        super(props);

        this.handleReplySubmit = this.handleReplySubmit.bind(this);
        this.state = {
            layer: "",
            username : "",
            message: "",
        }
    }
    static defaultProps = {
        commentId : null,
        replyTo: null,
        layer: 0
    }

    componentDidMount = () => {


        this.setState({
                        commentId: this.props.commentId,
                        layer: this.props.layer
                        })
    }

    handleReplySubmit = (e) => {

        e.preventDefault();

        const {username, commentId, message, layer} = this.state;

        let fieldArr = [];

        if(username == "") {

            fieldArr.push("Username");
        }

        if(message == "") {
            fieldArr.push("Message");
        }

        if(fieldArr.length > 0) {
            alert(fieldArr.join(",") + " is/are required!" );
            return;
        }


        fetch(Constants.BASE_URL + "/comments ", {
            method: 'POST',
            headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "parent_id": commentId,
                "comment_text": message,
                "layer": layer + 1
            })
        }).then((response) => {
                return response.json();
            }).then((res) => {
                //console.log(res);

                this.setState({message: ''})
                this.props.onChange(res);
            })
        .catch(function(err){
            console.log(err);
        });

    }



    render() {

        const { displayReply, replyTo} = this.props;

        const { username, message } = this.state;

        let commentHereLabel;

        if(replyTo === null) {
            commentHereLabel = "Leave your comment here";
        } else {
            commentHereLabel = `Reply to ${replyTo}`;
        }

        return(
            <div className={`reply-section ${displayReply ? "": "hide" }`}>
                    <div className='comment-here'>{commentHereLabel}</div>
                    <input className="reply-input" type="text" placeholder='Enter Name' onChange={e => this.setState({username  : e.target.value})} value={username}/>
                    <textarea className='reply-text' rows="3" onChange={e => this.setState({message  : e.target.value})} value={message}/>
                    <button className='reply-submit' onClick={this.handleReplySubmit}>Submit</button>
            </div>
        )
    }
}

export {Reply};