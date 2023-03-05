export const Heart: React.FC<{ value: number }> = ({ value }) => {

  return (
    <div className="heart-container">
      <div className="heart">
        {value}%
        <div className="heart-outline"></div>
      </div>
    </div>
  )
}
