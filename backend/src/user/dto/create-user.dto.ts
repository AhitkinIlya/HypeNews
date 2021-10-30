import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation'
import { UserEntity } from '../entities/user.entity'


export class CreateUserDto {
    @IsNotEmpty({message: 'Поле не может быть пустым'})
    fullName: string

    @IsEmail(undefined, { message: 'Некорректная почта' })
    @UniqueOnDatabase(UserEntity)
    email: string

    @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
    password?: string
}
