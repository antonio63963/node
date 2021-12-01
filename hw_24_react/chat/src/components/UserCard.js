
export default function UserCard({ user, dataId }) {
  const { chatName, userPhoto, lastChatMessage, isActive } = user;

  return (
    <li className={ `user-card ${isActive ? 'user-active-card' : 'user-notActive-card'}`} data-id={ dataId }>
      <div className="card-avatar" style={{ backgroundImage: userPhoto}}>
        <img  src={ userPhoto } alt="user avatar" />
      </div>
      <div className="user-info">
        <span className="user-nik">{ chatName }</span>
        <p className="last-message">{ lastChatMessage }</p>
      </div>
    </li>
  )
}