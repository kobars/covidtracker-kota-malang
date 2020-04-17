import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      {/* bootstrap */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      {/* leaflet */}
      {/* <link
        rel="stylesheet"
        href="https://d19vzq90twjlae.cloudfront.net/leaflet-0.7/leaflet.css"
      /> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js" />

      <script src="https://d19vzq90twjlae.cloudfront.net/leaflet-0.7/leaflet.js" /> */}
    </Head>
    <div id="app">{props.children}</div>
  </div>
)

export default Layout
