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
        <TileLayer attribution="" maxZoom={18} url={props.url} />
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
