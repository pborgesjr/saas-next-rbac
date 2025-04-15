import { z } from 'zod'

// This schema it is used to validate the permissions only and should not be used to validate the data from the database
export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
