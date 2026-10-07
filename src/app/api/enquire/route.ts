import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, guestCount, venue, budget, message, occasion } = body;

    // Validate required fields
    if (!name || !email || !date || !venue || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, date, venue, message).' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    // If Formspree key is configured, forward to Formspree backend
    if (formspreeKey) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            date,
            guestCount,
            venue,
            budget,
            message,
            occasion: occasion || 'wedding',
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          return NextResponse.json(
            { error: errData.error || 'Failed to submit to Formspree' },
            { status: response.status }
          );
        }
      } catch (err) {
        console.error('Error forwarding to Formspree:', err);
      }
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      message: 'Enquiry received successfully! Sosa will get back to you shortly.',
      data: {
        name,
        email,
        date,
        occasion: occasion || 'wedding',
      },
    });
  } catch (error) {
    console.error('Backend booking enquiry error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing booking enquiry.' },
      { status: 500 }
    );
  }
}
