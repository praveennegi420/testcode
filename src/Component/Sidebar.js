import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
       <img src='https://s.studiobinder.com/wp-content/uploads/2022/02/Don-Draper-Headshot-StudioBinder.png' className='person'/>
      <div className="logo">
        <img src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" />
      </div>
      <div className="nav">
        <div className="nav-content">
          <img
            // className="icon"
            className="inline"
            src="https://img.icons8.com/ios-glyphs/20/null/home-page--v1.png"
          />
          <Link className='nav-comp' to='/'><h4>Home</h4></Link>
        </div>
        <div className="nav-content">
          <img className="inline" src="https://img.icons8.com/ios/20/null/tear-off-calendar--v1.png" />
          <Link className='nav-comp' to='/bookdj'><h4>My Dj Bookings</h4></Link>
        </div>
        <div className="nav-content">
          <img className="inline" src="https://img.icons8.com/ios-glyphs/20/null/settings--v1.png" />
          <Link className='nav-comp' to='/promo'><h4>Promos</h4></Link>
        </div>
        <div className="nav-content">
          <img className="inline" src="https://img.icons8.com/fluency-systems-filled/19/null/dj.png" />
          <Link className='nav-comp' to='/nearbydjs'><h4>Nearby Djs</h4></Link>
        </div>
        <div className="msg">
          <div className="nav-content">
            <img className="inline" src="https://img.icons8.com/ios/20/null/messages-mac.png" />
            <h4>Messages</h4>
          </div>
          <div className="nav-content">
            <img className="inline" src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/20/null/external-log-out-arrow-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png" />
            <h4>Log Out</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
