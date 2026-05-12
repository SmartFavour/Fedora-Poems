//PoemsCard.js
function PoemCard({ title,author, content }) {
  return (
    <div className="poemcard">
      <h2 className="poem-title">{title}</h2>
      <p className="poem-author">by {author}</p>
      <p className="poem-content">{content}</p>
    </div>
  );
}

export default PoemCard;
