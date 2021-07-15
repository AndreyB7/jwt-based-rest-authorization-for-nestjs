import {IUser, UserRole} from "./interfaces";
import {Enum, Entity, EntityRepositoryType, PrimaryKey, Property} from "@mikro-orm/core";
@Entity()
export class UserEntity {
  [EntityRepositoryType]?: IUser;

  @PrimaryKey()
  id: number;

  @Property({columnType: "varchar"})
  email: string;

  @Property({columnType: "varchar", hidden: true})
  password: string;

  @Enum({default: [UserRole.User]})
  roles: [UserRole.User];
}
