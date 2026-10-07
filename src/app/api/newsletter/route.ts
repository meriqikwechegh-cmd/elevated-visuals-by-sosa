import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    if (formspreeKey) {
      try {
        await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email,
            type: 'newsletter',
            subscribedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error('Error forwarding newsletter to Formspree:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Subscribed to updates successfully.',
    });
  } catch (error) {
    console.error('Newsletter backend error:', error);
    return NextResponse.json(
      { error: 'Server error processing newsletter subscription.' },
      { status: 500 }
    );
  }
}
