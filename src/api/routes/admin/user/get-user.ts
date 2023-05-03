import { Request, Response } from 'express'
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(10),
  age: z.number().min(10),
  id: z.string(),
})

export default async function (req: Request, res: Response) {
  const id = req.params.id

  const validated = userSchema.parse({
    name: 'dao van luong',
    age: 21,
    id,
  })

  res.json(validated)
}
