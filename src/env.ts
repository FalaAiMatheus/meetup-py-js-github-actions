import { z } from "zod";

const schema = z.object({
    API_PORT: z.coerce.number().min(1),
    DATABASE_URL: z.string().url().min(1)
}).parse(process.env)

export { schema as env };
