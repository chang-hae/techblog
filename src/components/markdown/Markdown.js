import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = ({ node, inline, className, children, ...props }) => {
    return inline ? (
        // 강조 (``)
        <code
            style={{
                background: "linear-gradient(to top, #FFE400 15%, transparent 15%)",
                padding: "4px 2px",
            }}
            {...props}
        >
            {children}
        </code>
    ) : (
        // 코드 (```)
        <SyntaxHighlighter
            style={nord}
            language="javascript"
            PreTag="div"
            {...props}
        >
            {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    );
};

const blockquote = ({ node, children, ...props }) => {
    return (
        <blockquote
            style={{
                background: "#f0f0f0",
                padding: "5px 20px",
                margin: "0px",
                borderRadius: "10px",
                fontSize: "24px",
            }}
            {...props}
        >
            {children}
        </blockquote>
    );
}

const img = ({ node, ...props }) => {
    return (
        <img
            style={{ maxWidth: "60vw" }}
            src={props.src.replace("../../../../public/", "/")}
            alt="MarkdownRenderer__Image"
        />
    );
}

const em = ({ node, children, ...props }) => {
    return (
        <span style={{ fontStyle: "italic" }} {...props}>
            {children}
        </span>
    );
};

const a = ({ node, children, ...props }) => {
    return (
        <a target={"_blank"} style={{ textDecoration: "none" }} {...props}>
            {children}
        </a>
    );
};

const Markdown = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ code, blockquote, img, em, a }}>
            {content}
        </ReactMarkdown>
    )
}

export default Markdown;