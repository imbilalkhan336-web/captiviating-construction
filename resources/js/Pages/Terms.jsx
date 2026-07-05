import LegalPage from './LegalPage';

const SECTIONS = [
    {
        heading: 'Agreement to Terms',
        body: [
            "These Terms & Conditions govern your use of the Guardian Air website and the heating, cooling, plumbing, drain, and indoor air quality services we provide across Monmouth, Middlesex, and Ocean counties, New Jersey. By using our website or scheduling service, you agree to these terms.",
        ],
    },
    {
        heading: 'Services & Estimates',
        body: [
            "Guardian Air provides licensed and insured residential and commercial HVAC and plumbing services. Estimates and quotes are based on the information available at the time and may be adjusted if conditions discovered during the work differ materially. We will always communicate any change before proceeding.",
            "Flat-rate pricing is provided in writing before work begins whenever possible. Emergency and after-hours service is available, and our pricing does not add overtime surcharges unless explicitly stated.",
        ],
    },
    {
        heading: 'Scheduling & Cancellations',
        body: [
            "Appointment times are estimates and may shift due to emergencies, weather, or factors beyond our control. We make every effort to arrive within the scheduled window and to notify you of any delay. Please give us reasonable notice if you need to reschedule.",
        ],
    },
    {
        heading: 'Payment',
        body: [
            "Payment is due upon completion of work unless other arrangements have been made in advance. We accept common payment methods and offer financing on qualifying installations. Unpaid balances may be subject to collection.",
        ],
    },
    {
        heading: 'Warranties',
        body: [
            "Workmanship and equipment warranties vary by service and manufacturer and are provided in your service documentation. Warranties may be void if equipment is serviced by an unauthorized party, misused, or not maintained as recommended.",
        ],
    },
    {
        heading: 'Limitation of Liability',
        body: [
            "Guardian Air is not liable for indirect, incidental, or consequential damages arising from the use of our website or services, to the fullest extent permitted by New Jersey law. The website is provided on an \"as is\" basis without warranties of any kind.",
        ],
    },
    {
        heading: 'Changes to These Terms',
        body: [
            "We may update these Terms & Conditions from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.",
        ],
    },
];

export default function Terms() {
    return (
        <LegalPage
            title="Terms & Conditions"
            path="/terms"
            label="Legal"
            description="The terms and conditions governing the use of the Guardian Air website and our HVAC, plumbing, and drain services across New Jersey."
            updated="June 2026"
            sections={SECTIONS}
        />
    );
}
