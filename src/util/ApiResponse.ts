import { NextResponse } from "next/server";

export const ApiError = async (error: string, statusCode: number) => {
  return NextResponse.json(
    {
      error,
    },
    { status: statusCode }
  );
};

export const ApiSuccess = async (
  data: string | Object | unknown,
  statusCode: number
) => {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status: statusCode }
  );
};
