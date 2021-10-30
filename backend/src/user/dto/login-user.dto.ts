import { IsEmail, Min } from "class-validator"

export class LoginUserDto {
    @IsEmail(undefined, { message: 'Некорректная почта' })
    email: string

    @Min(6, { message: 'Пароль должен содержать не менее 6 символов' })
    password?: string
}