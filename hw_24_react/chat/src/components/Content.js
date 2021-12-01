import UserMessage from './UserMessage.js';
export default function Content() {
  return (
    <section className="content">
      <header className="header content-header">
        <div className="">
          <h4 className="title">Title chat</h4>
            <span className="members-amount">members amount</span>
        </div>
        <i className="fal fa-search"></i>
      </header>
      <div className="chat">
        <UserMessage />
      </div>
      <div className="writeSms">
        <textarea className="mySms" id="mySms" rows="2" placeholder="write a message..."></textarea>
        <i className="fal fa-paper-plane"></i>
  
      </div>
    </section>
  )
}