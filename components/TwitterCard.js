const TwitterCard = ({ content }) => {
  return (
    <div className="container">
      <div className="card text-white bg-info mb-3">
        <div className="card-body">
          <div className="card-title">
            <h2>
              <span className="pr-3">
                <img src="./svg/twitter.svg" width="26" height="26" />
              </span>
              Pemkot Malang
            </h2>
          </div>
          <br />
          <p className="card-text">{content}</p>
        </div>
        <style jsx>{`
          .bg-info {
            background-color: #26c6da;
          }
          .card {
            width: 400px !important;
            text-align: left;
            box-shadow: -1px 15px 30px -12px black;
            max-height: 300px;
          }
        `}</style>
      </div>
    </div>
  )
}

export default TwitterCard
