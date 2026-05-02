function Card({ children }) {
  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md w-80">
      {children}
    </div>
  );
}

export default Card;