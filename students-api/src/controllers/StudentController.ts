import { Request, Response} from "express";
import { StudentTransform } from "../transforms/StudentTransform";
import { Error as JsonError } from 'jsonapi-serializer'
import { StudentDTO } from "../dto/StudentDTO";
import { ValidationError } from "class-validator";
import { CreateStudentUseCase } from "../use-cases/CreateStudentUseCase";
import { FindAllStudentUseCase } from "../use-cases/FindAllStudentUseCase";
import { FindOneStudentUseCase } from "../use-cases/FindOneStudentUseCase";
import { UpdateStudentUseCase } from "../use-cases/UpdateStudentUseCase";
import { DeleteStudentUseCase } from "../use-cases/DeleteStudentUseCase";
import { IStudentTransform } from "../interfaces/transforms/IStudentTransform";

/**
 *
 *
 * @export
 * @class StudentController
 */
export class StudentController {
    /**
     *
     *
     * @static
     * @param {Request} request
     * @param {Response} response
     * @return {*}
     * @memberof StudentController
     */
    static async index(request: Request, response: Response): Promise<Response> {
        const { page } = request.query as any;

        const number = Number(page ? page.number : 1);
        const limit = Number(page ? page.limit : 25);

        if (number <= 0) {
            return response.status(422).send(new JsonError({
                code: '422',
                title: 'Parameter is invalid',
                detail: 'The page[number] parameter must be a number greater than 1'
            }))
        }

        if (limit <= 0) {
            return response.status(422).send(new JsonError({
                code: '422',
                title: 'Parameter is invalid',
                detail: 'The page[limit] parameter must be a number greater than 1'
            }))
        }

        const [students, count] = await new FindAllStudentUseCase().run({ number, limit })

        const parsed = new StudentTransform(count).serialize(students)
        return response.status(200).send(parsed)
    }

    /**
     *
     *
     * @param {Request} request
     * @param {Response} response
     * @memberof StudentController
     */
    static async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const result = await new FindOneStudentUseCase().run(id)

        if (Array.isArray(result) && result[0] instanceof ValidationError) {
            const messages = result.map((error) => {
                return Object.values(error.constraints)
            })

            return response.status(422).send(new JsonError({
                code: '422',
                title: 'Unprocessable Entity',
                detail: JSON.stringify(messages),
            }))
        }

        const parsed = new StudentTransform().serialize(result)
        return response.status(200).send(parsed)
    }

    /**
     *
     *
     * @static
     * @param {Request} request
     * @param {Response} response
     * @memberof StudentController
     */
    static async store(request: Request, response: Response): Promise<Response> {
        const { body } = request;

        const studentDto = new StudentDTO().fromRequest(body)

        const result = await new CreateStudentUseCase().run(studentDto)

        if (Array.isArray(result) && result[0] instanceof ValidationError) {
            const messages = result.map((error) => {
                return Object.values(error.constraints)
            })

            return response.status(422).send(new JsonError({
                code: '422',
                title: 'Unprocessable Entity',
                detail: JSON.stringify(messages),
            }))
        }
        
        const parsed = new StudentTransform().serialize(result)
        return response.status(201).send(parsed)
    }

    /**
     *
     *
     * @static
     * @param {Request} request
     * @param {Response} response
     * @memberof StudentController
     */
    static async update(request: Request, response: Response): Promise<Response> {
        const { body } = request;
        const { id } = request.params

        const dto = new StudentDTO().fromRequest(body)

        const result = await new UpdateStudentUseCase().run(dto)

        if (Array.isArray(result) && result[0] instanceof ValidationError) {
            const messages = result.map((error) => {
                return Object.values(error.constraints)
            })

            return response.status(422).send(new JsonError({
                code: '422',
                title: 'Unprocessable Entity',
                detail: JSON.stringify(messages),
            }))
        }        

        const parsed = new StudentTransform().serialize(result)
        return response.status(201).send(parsed)
    }

    /**
     *
     *
     * @static
     * @param {Request} request
     * @param {Response} response
     * @memberof StudentController
     */
    static async delete(request: Request, response: Response) {
        const { id } = request.params;

        const result = await new DeleteStudentUseCase().run(id)

        if (Array.isArray(result) && result[0] instanceof ValidationError) {
            const messages = result.map((error) => {
                return Object.values(error.constraints)
            })

            return response.status(422).send(new JsonError({
                code: '422',
                title: 'Unprocessable Entity',
                detail: JSON.stringify(messages),
            }))
        }  

        return response.status(204).send()
    }

}