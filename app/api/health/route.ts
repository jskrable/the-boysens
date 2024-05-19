import { NextResponse } from 'next/server';

const GET = () => NextResponse.json({ message: 'Healthy!' }, { status: 200 });

export { GET };
