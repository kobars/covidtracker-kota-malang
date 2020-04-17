import { Map, TileLayer, GeoJSON } from 'react-leaflet'

const Maps = props => {
  return (
    <div className="map-container">
      <Map
        center={[props.lat, props.lng]}
        zoom={props.zoom}
        style={{
          width: '700px',
          height: '510px'
        }}
        ref={props.mapRef}
      >
        <TileLayer
          url={props.url}
          attribution=""
          maxZoom={18}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={props.data}
          style={props.featureStyle}
          onEachFeature={props.onEachFeature}
        />
      </Map>
      <style jsx>{`
        .map-container {
          box-shadow: -1rem 0 3rem #000 !important;
        }
      `}</style>
    </div>
  )
}

export default Maps
