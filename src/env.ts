import { z } from "zod";

const schema = z.object({
    API_PORT: z.coerce.number().min(1)
}).parse(process.env)

export { schema as env };
