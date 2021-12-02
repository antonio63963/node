import UserMessage from './UserMessage.js';
export default function Content(props) {
  const { messages, chatName } = props;

  return (
    <section className="content">
      <header className="header content-header">
        <div className="">
          <h4 className="title">{chatName}</h4>
            <span className="members-amount">members amount</span>
        </div>
        <i className="fal fa-search"></i>
      </header>
      <div className="chat">
        { messages.map( (sms, ind)=> <UserMessage sms={ sms } key={ ind }/>)}
      </div>
      <footer>
        <div className="writeSms">
          <textarea className="mySms" id="mySms" rows="2" placeholder="write a message..."></textarea>
          <i className="fal fa-paper-plane"></i>
        </div>
      </footer>
    </section>
  )
}