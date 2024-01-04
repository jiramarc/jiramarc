import { z } from "zod";

const projectQuerySchema = z.object({
	id: z.string(),
	title: z.string(),
	status: z.string(),
	label: z.string(),
	priority: z.string(),
});

type ProjectQuerySchema = z.infer<typeof projectQuerySchema>;

export { projectQuerySchema, type ProjectQuerySchema };
