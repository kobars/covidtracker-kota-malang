import { useState } from 'react'
import StackedBarChart from '../components/StackedBarChart'

function Bar(props) {
  const { rawData, chosenIndex } = props
  const allKeys = ['ODP', 'PDP', 'Positive']

  const colors = {
    ODP: '#f19066',
    PDP: '#e66767',
    Positive: '#eb3b5a'
  }
  const [keys, setKeys] = useState(allKeys)
  const dfData = rawData.cases.map(e => {
    return { ...e, ...{ date: e.date.match(/([^\s]+)/g)[0] } }
  })
  const data = dfData.slice(0, chosenIndex + 1)
  return (
    <React.Fragment>
      <StackedBarChart data={data} keys={keys} colors={colors} />
      <div className="fields">
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])))
                } else {
                  setKeys(keys.filter(_key => _key !== key))
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
      <style jsx>{`
        .field {
          display: inline-block;
          margin: 0 0.5em;
        }
        .field input {
          margin-right: 0.5em;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Bar
