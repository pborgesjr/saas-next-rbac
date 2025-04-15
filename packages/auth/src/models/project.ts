import { z } from 'zod'

// This schema it is used to validate the permissions only and should not be used to validate the data from the database
export const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'),
  id: z.string(),
  ownerId: z.string(),
})

export type Project = z.infer<typeof projectSchema>
