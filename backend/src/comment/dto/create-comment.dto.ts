import { IsNotEmpty } from "class-validator"

export class CreateCommentDto {
    @IsNotEmpty({ message: 'Текст обязателен' })
    text: string

    @IsNotEmpty()
    postId: number
}
