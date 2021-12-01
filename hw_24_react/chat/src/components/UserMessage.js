export default function UserMessage({ sms = null }) {
  const { userName, userPhoto, message, date} = sms;
  return (
    <div className="userMessage">
          <div className="userMessage-avatar">
            <img src={ userPhoto } alt="" />
          </div>

          <div className="userMessage-body">
            <div className="userMessage-title">
              <span className="userMessage-userName">{ userName }</span>
              <span className="userMessage-reply">reply</span>
            </div>
            <p>{ message }</p>
            <div className="sendTime-warapper">
              <span className="sendTime">12:00</span>
            </div>
          </div>
        </div>
  )
}