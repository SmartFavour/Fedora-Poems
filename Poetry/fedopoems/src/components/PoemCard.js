//PoemsCard.js
function PoemCard({ title, content }) {
  return (
    <div className="poemcard">
      <h3 className="poem-title">{title}</h3>
      <p className="poem-content">{content}</p>
    </div>
  );
}

export default PoemCard;
