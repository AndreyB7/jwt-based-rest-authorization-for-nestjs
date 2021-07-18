import {Module} from "@nestjs/common";
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {APP_GUARD, APP_PIPE} from "@nestjs/core";

import {JwtGuard, RolesGuard} from "./common/guards";
import {CustomValidationPipe} from "./common/pipes";
import {MikroOrmConfigService} from "./microorm.options";

import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: CustomValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [
    MikroOrmModule.forRootAsync({
      useClass: MikroOrmConfigService,
    }),
    AuthModule,
    UserModule,
  ],
})
export class ApplicationModule {}
