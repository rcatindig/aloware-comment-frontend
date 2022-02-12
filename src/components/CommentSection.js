import React, {Component} from "react";


import { CommentList } from "./CommentList";

import * as Constants from '../helpers/Constants';

import { Reply } from "./Reply";

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.onChangeCommentComponent = this.onChangeCommentComponent.bind(this);
        this.state = {
            comments : [],
            commentTree: [],
        }

    }

    componentDidMount = () => {
        this.getComments();
    }

    getComments = () => {


        fetch(Constants.BASE_URL + "/comments", {
            method: 'GET'
        }).then((response) => {
                return response.json();
            }).then((res) => {

                this.createTree(res);
                // this.setState({comments: res});
            })
        .catch(function(err){
            console.log(err);
        });

    }


    createTree = (comments) => {

        var map = {},
                node,
                roots = [],
                i

        for (i = 0; i < comments.length; i += 1) {
            map[comments[i].id] = i
            comments[i].children = []
        }

        for (i = 0; i < comments.length; i += 1) {
            node = comments[i]
            if (node.parent_id) {
                comments[map[node.parent_id]].children.push(node)
            } else {
                roots.push(node)
            }

        }

        this.setState({commentTree: roots});
    }

    onChangeCommentComponent = (data) => {


        if(data) {
            const { commentTree } = this.state;


            data.children = [];

            commentTree.push(data);

            this.setState({commentTree: commentTree})
        }

    }


    render() {
        const { title } = this.props;

        const { comments, commentTree } = this.state;


        return(
            <div className="card">
                <h2>{title}</h2>

                {commentTree.map((value, index) => {
                    return (
                        <CommentList
                            type="parent"
                            key={index}
                            comment={value}
                            >
                        </CommentList>
                    )
                })}


                    <Reply
                        displayReply={true}
                        onChange={this.onChangeCommentComponent}
                    />

            </div>
        )
    }
}

export {CommentSection};