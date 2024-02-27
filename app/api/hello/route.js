// Import for the headers dependency
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url)

  const param = url.searchParams
  return NextResponse.json({message: param})
}