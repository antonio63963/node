export default function UserMessage() {
  return (
    <div className="userMessage">
          <div className="userMessage-avatar">
            <img src="" alt="" />
          </div>

          <div className="userMessage-body">
            <div className="userMessage-title">
              <span className="userMessage-userName">Some nik</span>
              <span className="userMessage-reply">reply</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae possimus dolorum sequi error cupiditate accusamus provident tempore quod soluta, expedita, sit accusantium voluptatibus esse laboriosam est nam aliquam neque quibusdam!</p>
            <div className="sendTime-warapper">
              <span className="sendTime">12:00</span>
            </div>
          </div>
        </div>
  )
}