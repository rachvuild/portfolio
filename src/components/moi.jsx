export default function Moi({ MoiInfo, onClick }) {
  return (
    <div onClick={onClick} className="info">
      <div className="containt-h2">
        <div className="back"></div>
        <hr />
        <h2>{MoiInfo.nom}</h2>
        <hr />
      </div>
    </div>
  );
}
