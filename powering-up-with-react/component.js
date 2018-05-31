class Comment extends React.Component {
    render() {
        return(
            <div className="panel">
                <p className="panel-heading text-success">{this.props.author}</p>
                <hr/>
                <p className="panel-body">{this.props.body}</p>
                <div className="panel-footer clearfix">
                    <a href="#" className="text-danger pull-right">
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}

class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: [
                {id: 1, author: 'Morgan McCircuit', body: 'Great picture!'},
                {id: 2, author: 'Bending Bender', body: 'Excellent stuff'}
            ]
        }
    }

    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show comments';

        if(this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div>{comments}</div>;
        }
        return(
            <div className="jumbotron">
                <CommentForm addComment={this._addComment.bind(this)} />
                <h3 className="text-uppercase text-info">Comments</h3>
                <hr/>
                <h4 className="text-uppercase text-muted">{this._getCommentsTitle(comments.length)}</h4>
                <button className="btn btn-primary pull-right" onClick={this._handleClick.bind(this)}>{buttonText}</button>
                <br/>
                <br/>
                {commentNodes}
            </div>
        );
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        }
        this.setState({comments: this.state.comments.concat([comment]) });
    }

    _handleClick() {
        this.setState({showComments: !this.state.showComments});
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (
                <Comment author={comment.author} body={comment.body} key={comment.id} />
            );
        });
    }

    _getCommentsTitle(commentCount) {
        if(commentCount === 0) {
            return 'No comments yet';
        } else if(commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <h2 className="text-uppercase">Join the discussion</h2>
                <div className="well">
                    <h3 className="text-uppercase">New Comment</h3>
                    <input className="form-control form-group" placeholder="What's your name?" ref={(input) => this._author = input}/>
                    <textarea className="form-control form-group" placeholder="Join the discussion..." ref={(textarea) => this._body = textarea}></textarea>
                    <button className="btn btn-lg btn-warning" type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        };
        this.setSate({comments: this.state.comments.concat([comment])});
    }

    _handleSubmit(event) {
        event.preventDefault();

        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
    }
}

ReactDOM.render(
    <CommentBox />, document.getElementById('story-app')
);