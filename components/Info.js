import Bar from '../components/Bar'

const Info = props => {
  const { rawData } = props
  const { name, cases } = props.properties
  const chosenIndex = props.index
  return (
    <div className="card text-white bg-dark">
      <div className="card-header">
        <h3>{name !== undefined ? `Kecamatan ${name}` : 'Kota Malang'}</h3>
      </div>
      <div className="card-body">
        <div className="container" style={{ padding: '0 180px' }}>
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-center">ODP</h5>
              <h6 className="text-center">
                {cases !== undefined ? cases[chosenIndex].ODP : 551}
              </h6>
            </div>
            <div className="col-md-4">
              <h5 className="text-center">PDP</h5>
              <h6 className="text-center">
                {cases !== undefined ? cases[chosenIndex].PDP : 103}
              </h6>
            </div>
            <div className="col-md-4">
              <h5 className="text-center">Positive</h5>
              <h6 className="text-center">
                {cases !== undefined ? cases[chosenIndex].Positive : 8}
              </h6>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: '0 100px' }}>
          <Bar chosenIndex={chosenIndex} rawData={rawData} />
        </div>
      </div>
      <style jsx>{`
        .card {
          height: 510px;
          box-shadow: -1px 15px 30px -12px black;
        }
        .bg-dark {
          background-color: #303952 !important;
        }
        .card-header {
          text-align: center;
        }
        .card-text {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}

export default Info
