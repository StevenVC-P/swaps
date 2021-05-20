import React, {useState, useRef } from "react";
import cn from "classnames";
import { useParams } from "react-router-dom";
import "./styles.css";
import API from "../../utils/API";

const INITIAL_HEIGHT = 46;

const CommentBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");
    const {productId} = useParams()

    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    }


    function onChange(event) {
        const { name, value } = event.target;
        setCommentValue({...commentValue, [name]: value, product: productId})
    };

    const onClose = () => {
        setCommentValue({});
        setIsExpanded(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(commentValue)
        if(commentValue){
            API.addComment(commentValue)
            .then(res => {
                setCommentValue({});
                setIsExpanded(false);
                console.log('Comment Res', res)
                if(res.status === 200){
                    console.log("SUCCESS! Comment Added")
                } else {
                    console.log("FAIL", res.status)
                }
            })
            .catch(err => console.log("ERROR ADDING COMMENT", err))
        }
    };

    return(
        <form
            onSubmit={onSubmit}
            ref={containerRef}
            className={cn("comment-box", {
                expanded: isExpanded,
                collapsed: !isExpanded,
                modified: commentValue.length > 0,
            })}
            style={{
                minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
            }}
        >
            {/* <div className="header">
                <div className="user">
                    <img
                    src="avatar/path"
                    alt="User avatar"
                    />
                    <span>User Name</span>
                </div>
            </div>   */}

            <label htmlFor="comment"></label>
            <textarea
                ref={textRef}
                onClick={onExpand}
                onFocus={onExpand}
                onChange={onChange}
                className="comment-field"
                placeholder="Add comment"
                // value={commentValue}
                name="comment"
                
            />

            <div className="actions">
                <button type="button" className="cancel" onClick={onClose}>
                    Cancel
                </button>
                <button type="submit" className="cancel" disabled={commentValue.length < 1}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CommentBox;