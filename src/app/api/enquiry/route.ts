import { NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guests: string | number;
  serviceRequired: string;
  budget?: string;
  dietary?: string;
  additionalInfo?: string;
}

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();

    // Validation
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Full name is required (minimum 2 characters).";
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.email = "A valid email address is required.";
    }

    if (!body.phone || body.phone.trim().length < 8) {
      errors.phone = "A valid contact telephone number is required.";
    }

    if (!body.eventType) {
      errors.eventType = "Please select the type of event.";
    }

    if (!body.eventDate) {
      errors.eventDate = "Please provide your planned event date.";
    }

    if (!body.location || body.location.trim().length < 2) {
      errors.location = "Event venue or city location is required.";
    }

    if (!body.guests || Number(body.guests) <= 0) {
      errors.guests = "Please provide an estimated number of guests.";
    }

    if (!body.serviceRequired) {
      errors.serviceRequired = "Please select the primary catering service required.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please fill in all required fields accurately.",
        },
        { status: 400 }
      );
    }

    const enquiryId = `PER-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
    const destinationEmail = process.env.BUSINESS_EMAIL || "enquiries@perlecocatering.com";

    // Structured logging for business enquiry monitoring
    console.info(`[PERLECO ENQUIRY LOGGED] ID: ${enquiryId}`);
    console.info(`Client: ${body.fullName} (${body.email}, ${body.phone})`);
    console.info(`Event: ${body.eventType} on ${body.eventDate} at ${body.location} for ${body.guests} guests`);
    console.info(`Service: ${body.serviceRequired}`);
    console.info(`Destination configured to: ${destinationEmail}`);

    // In production, integration hooks like Resend, Sendgrid, or Webhook are plugged here
    // e.g., if (process.env.RESEND_API_KEY) { await resend.emails.send(...) }

    return NextResponse.json(
      {
        success: true,
        enquiryId,
        message: "Your enquiry has been received by Perleco Catering. Our team will review your requirements and respond within 24 hours.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please contact us directly at 07947832818.",
      },
      { status: 500 }
    );
  }
}
