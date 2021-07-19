import {Entity, PrimaryKey, Property, OneToOne, EntityRepositoryType} from "@mikro-orm/core";

import {UserEntity} from "../user/user.entity";
import {IAuth} from "./interfaces";

@Entity()
export class AuthEntity {
  [EntityRepositoryType]?: IAuth;

  @PrimaryKey()
  id: number;

  @Property({columnType: "varchar"})
  refreshToken: string;

  @Property({columnType: "bigint"})
  refreshTokenExpiresAt: number;

  accessToken: string;

  accessTokenExpiresAt: number;

  @OneToOne()
  user: UserEntity;

  @Property()
  timeCreatedAt = new Date();

  @Property({onUpdate: () => new Date()})
  timeUpdatedAt = new Date();
}
