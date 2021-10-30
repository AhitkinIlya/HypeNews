import { Injectable, ForbiddenException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByCond({
      email,
      password
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwtToken(data: {id: number, email: string}) {
    const payload = { email: data.email, sub: data.id };
    return this.jwtService.sign(payload)
  }

  async login(user: UserEntity) {
    const {password, ...userData} = user
    return {
      ...userData,
      token: this.generateJwtToken(userData)
    };
  }

  async registration(dto: CreateUserDto) {
    try {
      const {password, ...userData} = await this.usersService.create({
        email: dto.email,
        fullName: dto.fullName,
        password: dto.password
      })
      return {
        ...userData,
        token: this.generateJwtToken(userData)
      };
    } catch {
      throw new ForbiddenException('Ошибка регистрации')
    }
  }
}
