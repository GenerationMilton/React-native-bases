import type { User } from "../interfaces/reqres.response";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const avatarSrc = user.avatar || "/avatar-placeholder.svg";

  return (
    <tr className="p-2">
      <td>
        <img
          src={avatarSrc}
          onError={(event) => {
            event.currentTarget.src = "/avatar-placeholder.svg";
          }}
          className="rounded-full w-14 p-2"
          alt="User Avatar"
        />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>{user.email}</td>
    </tr>
  );
};
