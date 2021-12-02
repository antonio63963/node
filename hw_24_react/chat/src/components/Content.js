import PropTypes from 'prop-types';
import UserMessage from './UserMessage.js';
export default function Content(props) {
  const { messages, chatName, isHide } = props;

  return (
    <section className="content">
      <header className="header content-header">
      <i className={`fal fa-arrow-left pointer ${ isHide ? 'openSidebar' : 'hidden'}`}></i>
        <div className="content-header_info">
          <h4 className="title">{chatName}</h4>
            <span className="members-amount">members amount</span>
        </div>
        <i className="searchIcon fal fa-search"></i>
      </header>
      <div className="chat">
        { messages.map( (sms, ind)=> <UserMessage sms={ sms } key={ ind }/>)}
      </div>

        <div className="writeSms">
          <textarea className="mySms" id="mySms" rows="2" placeholder="write a message..."></textarea>
          <i className="fal fa-paper-plane"></i>
        </div>

    </section>
  )
}