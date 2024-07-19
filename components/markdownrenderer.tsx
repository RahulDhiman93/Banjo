// components/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
    content: string;
};

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
    const components = {
        code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={solarizedDarkAtom}
                    language={match[1]}
                    PreTag="div"
                    className="bg-black/10 rounded-lg p-1"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className="bg-black/10 rounded-lg p-1" {...props}>
                    {children}
                </code>
            );
        }
    };

    return <ReactMarkdown components={components} className="text-sm overflow-hidden leading-7">{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
