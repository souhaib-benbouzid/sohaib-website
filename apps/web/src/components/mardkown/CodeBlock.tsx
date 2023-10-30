type Props = {
  className?: string;
  children: string;
};

const CodeBlock = (props: Props) => {
  const className = props.className;
  if (!className) {
    return (
      <code {...props} style={{ color: "pink" }}>
        <strong>{props.children}</strong>
      </code>
    );
  }

  const language = className?.split("-")[1];

  return (
    <pre>
      <code {...props} className={`language-${language}`} />
    </pre>
  );
};

export default CodeBlock;
