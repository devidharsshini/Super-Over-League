const element = (
  <div className='super-league-container'>
    <h1 className='heading'>Super Over League</h1>
    <div className='teams-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='rcb-image'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='csk-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
