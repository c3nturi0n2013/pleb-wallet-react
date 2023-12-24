const Stats = () => {
  return (
    <div className="stats-container">
      <a
        href="https://www.statista.com/chart/24571/central-bank-digital-currencies-around-the-world/"
        title="Infographic: Where Central Banks Have Issued Digital Currencies | Statista"
      >
        <img
          className="image"
          src="https://cdn.statcdn.com/Infographic/images/normal/24571.jpeg"
          alt="Infographic: Where Central Banks Have Issued Digital Currencies | Statista"
        />
        <div className="overlay"></div>
      </a>{' '}
      <div className="info-graphics">
        <h3>You will find more infographics at</h3>
        <a className="statista" href="https://www.statista.com/chartoftheday/">
          {' '}
          Statista
        </a>
      </div>
    </div>
  )
}
export default Stats
