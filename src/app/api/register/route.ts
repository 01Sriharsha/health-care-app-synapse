import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import { ApiError, ApiSuccess } from "@/util/ApiResponse";

export const POST = async (req: Request) => {
  const body: RegisterSchemaType = await req.json();

  const parsedSchema = RegisterSchema.safeParse(body);

  if (!parsedSchema.success) {
    return ApiError(parsedSchema.error.errors[0].message, 400);
  }

  return ApiSuccess(true, 200);
};
