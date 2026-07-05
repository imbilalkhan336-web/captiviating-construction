<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
        <div style="background:#07264A;border-radius:14px 14px 0 0;padding:20px 24px;">
            <h1 style="margin:0;color:#fff;font-size:18px;text-transform:uppercase;letter-spacing:1px;">
                New {{ $s->form_type === 'schedule' ? 'Schedule Request' : 'Contact Form' }}
            </h1>
            <p style="margin:6px 0 0;color:#0060B9;font-size:13px;">Captivating Construction Group — website lead</p>
        </div>

        <div style="background:#fff;border-radius:0 0 14px 14px;padding:24px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="padding:8px 0;font-weight:bold;">{{ $s->name }}</td></tr>
                @if ($s->phone)
                    <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;font-weight:bold;"><a href="tel:{{ $s->phone }}" style="color:#0A55C1;">{{ $s->phone }}</a></td></tr>
                @endif
                @if ($s->email)
                    <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;font-weight:bold;"><a href="mailto:{{ $s->email }}" style="color:#0A55C1;">{{ $s->email }}</a></td></tr>
                @endif
                @if ($s->service)
                    <tr><td style="padding:8px 0;color:#6b7280;">Service</td><td style="padding:8px 0;font-weight:bold;">{{ ucfirst($s->service) }}</td></tr>
                @endif
                @if ($s->preferred_date)
                    <tr><td style="padding:8px 0;color:#6b7280;">Preferred Date</td><td style="padding:8px 0;font-weight:bold;">{{ \Illuminate\Support\Carbon::parse($s->preferred_date)->toFormattedDateString() }}</td></tr>
                @endif
                @if ($s->source_page)
                    <tr><td style="padding:8px 0;color:#6b7280;">Submitted From</td><td style="padding:8px 0;font-weight:bold;">{{ $s->source_page }}</td></tr>
                @endif
                <tr><td style="padding:8px 0;color:#6b7280;">Received</td><td style="padding:8px 0;">{{ $s->created_at?->format('M j, Y g:i A') }}</td></tr>
            </table>

            @if ($s->message)
                <p style="margin:18px 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                <div style="background:#f9fafb;border-radius:10px;padding:14px;font-size:14px;line-height:1.6;white-space:pre-wrap;">{{ $s->message }}</div>
            @endif

            <p style="margin:22px 0 0;font-size:12px;color:#9ca3af;">
                This lead is also saved in your admin panel under Submissions. Reply to this email to respond directly to the customer.
            </p>
        </div>
    </div>
</body>
</html>
