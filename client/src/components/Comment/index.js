import React, {useState, useRef } from "react";
import cn from "classnames";
import { useParams } from "react-router-dom";



const INITIAL_HEIGHT = 46;

const CommentBox = (props) => {
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
            props.submitcommenta(commentValue)
            setCommentValue({});
            
        }
    };

    return(
        <form
            // onSubmit={onSubmit}
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
                value={commentValue.comment}
                name="comment"
                
            />

            <div className="actions">
                 <button type="submit" className="submit" onClick={onSubmit} disabled={commentValue.length < 1}>
                    Submit
                </button>
                <button type="button" className="cancel" onClick={onClose}>
                    Cancel
                </button>
               
            </div>
        </form>
    );
};

export default CommentBox;