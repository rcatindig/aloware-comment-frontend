import React, {Component} from "react";

import moment from 'moment'

import { Reply } from "./Reply";

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.handleClickReply = this.handleClickReply.bind(this);
        this.onChangeReplyComponent = this.onChangeReplyComponent.bind(this);
        this.state = {
            displayReply : false,
            layer: "",
            commentId : "",
            children : [],
            username : "",
            message: "",
        }
    }

    componentDidMount = () => {


        this.setState({children: this.props.comment.children,
                        layer: this.props.comment.layer,
                        commentId: this.props.id
                        })
    }

    handleClickReply = (e) => {
        e.preventDefault();
        this.setState({displayReply: true})
    }


    onChangeReplyComponent = (data) => {


        if(data) {
            const { children } = this.state;

            data.children = [];

            children.push(data);

            this.setState({children: children})
        }

    }



    render() {
        const { comment, type } = this.props;

        const {displayReply, children} = this.state;

        const nestedComments = (children || []).map((comment) => {
            return <CommentList type="child" key={comment.id} comment={comment} type="child" />
        })

        let button;

        if(comment.layer < 3) {
            button =  <button className='reply-btn' onClick={this.handleClickReply}>Reply</button>;
        }

        return(
            <div className={`comment-list ${type}`}>
                <div className='comment-username'>{comment.username}</div>
                <div className='comment-date'>{moment(comment.created_at).format('LLL')}</div>
                <div className='comment-text'>
                    {comment.comment_text}
                </div>


                {button}
                {nestedComments}

                <Reply
                    commentId={comment.id}
                    replyTo={comment.username}
                    displayReply={displayReply}
                    layer={comment.layer}
                    onChange={this.onChangeReplyComponent}
                    />
            </div>
        )
    }
}

export {CommentList};