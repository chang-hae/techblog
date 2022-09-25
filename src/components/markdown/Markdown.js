import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = ({ node, inline, className, children, ...props }) => {
    if (inline) {
        return (
            <code
                style={{
                    background: "linear-gradient(to top, #FFE400 15%, transparent 15%)",
                    padding: "4px 2px",
                }}
                {...props}
            >
                {children}
            </code>
        )
    }

    const match = /language-(\w+)/.exec(className || '');
    return match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={darcula}
            language={match[1]}
            PreTag="div"
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
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
            style={{ maxWidth: "100%" }}
            src={props.src.replace("../../../../public/", "/")}
            alt={props.alt}
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

const p = ({ node, children, ...props }) => {
    const hasImage = node.children.filter(child => child.tagName === "img").pop();
    if(!!hasImage) {
        return (
            <p align="center" {...props}>
                {children}
            </p>
        );
    }

    return (
        <p style={{ fontSize: "1.2rem" }} {...props}>
            {children}
        </p>
    );
};

const Markdown = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ code, blockquote, img, em, a, p }}>
            {content}
        </ReactMarkdown>
    )
}

export default Markdown;