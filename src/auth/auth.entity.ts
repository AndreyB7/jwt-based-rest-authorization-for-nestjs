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

  @Property()
  accessToken: string;

  @Property()
  accessTokenExpiresAt: number;

  @OneToOne()
  user: UserEntity;

  @Property({type: "timestamptz"})
  timeCreatedAt = new Date().toISOString();

  @Property({type: "timestamptz", onUpdate: () => new Date().toISOString()})
  timeUpdatedAt = new Date().toISOString();
}
