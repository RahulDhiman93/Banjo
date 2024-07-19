// types/react-syntax-highlighter.d.ts
declare module 'react-syntax-highlighter' {
    import { ComponentType } from 'react';
    import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
    export { SyntaxHighlighter };
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    const styles: any;
    export default styles;
}
