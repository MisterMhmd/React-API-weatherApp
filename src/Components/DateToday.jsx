


export default function DateToday() {
  const formatDate = () => {
    const date = new Date();
    const format = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleDateString("en-EG", format);
  };

  return (
    <div className="date-display">
      <p>{formatDate()}</p>
    </div>
  )
}
