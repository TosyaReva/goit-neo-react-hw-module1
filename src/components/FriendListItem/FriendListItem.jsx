import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  // isOnline color css
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
