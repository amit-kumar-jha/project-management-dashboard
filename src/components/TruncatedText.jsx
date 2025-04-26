function TruncatedText({ text, maxLength = 20 }) {
  const shouldTruncate = text.length > maxLength;
  const displayText = shouldTruncate ? text.slice(0, maxLength) + "..." : text;

  return (
    <div
      className="ellipsis-text"
      title={text} // Full text on hover
    >
      {displayText}
    </div>
  );
}

export default TruncatedText;
