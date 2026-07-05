import LegalPage from './LegalPage';

const SECTIONS = [
    {
        heading: 'Overview',
        body: [
            "Guardian Air respects your privacy. This Privacy Policy explains what information we collect through our website and service requests, how we use it, and the choices you have. It applies to homeowners and businesses we serve across Monmouth, Middlesex, and Ocean counties, New Jersey.",
        ],
    },
    {
        heading: 'Information We Collect',
        body: [
            "When you request service, schedule online, or contact us, we may collect your name, phone number, email address, service address, and details about the work you need. We may also collect basic, non-identifying analytics about how visitors use our website, such as pages viewed and device type.",
        ],
    },
    {
        heading: 'How We Use Your Information',
        body: [
            "We use your information to schedule and perform service, provide quotes, communicate with you about appointments, process payments, and improve our website and services. We may contact you about your request or, with your consent, about offers and maintenance reminders.",
        ],
    },
    {
        heading: 'How We Share Information',
        body: [
            "We do not sell your personal information. We share it only as needed to deliver service — for example, with technicians, payment processors, or scheduling tools — or when required by law. Any partners who handle your data are expected to protect it.",
        ],
    },
    {
        heading: 'Cookies & Analytics',
        body: [
            "Our website may use cookies and similar technologies to remember preferences and measure site performance. You can control cookies through your browser settings; disabling them may affect some site features.",
        ],
    },
    {
        heading: 'Data Security',
        body: [
            "We take reasonable measures to protect your information from unauthorized access, use, or disclosure. No method of transmission or storage is completely secure, but we work to safeguard the data you share with us.",
        ],
    },
    {
        heading: 'Your Choices',
        body: [
            "You may opt out of marketing communications at any time by following the unsubscribe instructions or contacting us. You may also request that we update or delete your personal information, subject to any legal obligations to retain it.",
        ],
    },
    {
        heading: 'Changes to This Policy',
        body: [
            "We may update this Privacy Policy periodically. The latest version will always be posted on this page with its effective date.",
        ],
    },
];

export default function Privacy() {
    return (
        <LegalPage
            title="Privacy Policy"
            path="/privacy"
            label="Legal"
            description="How Guardian Air collects, uses, and protects the information you share through our website and service requests across New Jersey."
            updated="June 2026"
            sections={SECTIONS}
        />
    );
}
