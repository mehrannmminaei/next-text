import { IUsersAvatarListProps } from "@/app/types/usersAvatarListProps";
import Image from "next/image";

const UserList: IUsersAvatarListProps[] = [
  {
    imagePath: "/assets/icons/users/Ellipseuser3.png",
    name: "user1",
  },
  {
    imagePath: "/assets/icons/users/Ellipseuser2.png",
    name: "user2",
  },

  {
    imagePath: "/assets/icons/users/Ellipseuser1.png",
    name: "user3",
  },
];
const UsersAvatarList = () => {
  return (
    <div className="flex relative">
      {UserList?.map((item, index) => {
        return (
          <div
            key={index}
            style={{ left: index * 36, zIndex: index }}
            className="absolute"
          >
            <Image
              src={item.imagePath}
              width={50}
              height={50}
              alt="user"
              className="hover:scale-105 "
            />
          </div>
        );
      })}
    </div>
  );
};

export default UsersAvatarList;
