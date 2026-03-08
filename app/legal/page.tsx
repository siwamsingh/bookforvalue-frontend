import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Privacy Policy | BookForValue",
  description:
    "Read the Terms & Conditions and Privacy Policy of BookForValue. Learn about delivery timelines, refunds, replacements, and how we protect your privacy.",
  keywords: [
    "BookForValue terms",
    "BookForValue privacy policy",
    "bookforvalue refund policy",
    "bookforvalue delivery policy",
    "buy books online india terms",
  ],
  openGraph: {
    title: "Terms & Conditions | BookForValue",
    description:
      "Terms & Conditions and Privacy Policy for BookForValue online bookstore.",
    url: "https://bookforvalue.com/legal",
    siteName: "BookForValue",
    type: "website",
  },
};

export default function LegalPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Last Updated: 8 March 2026
      </p>

      <section className="space-y-6">

        <div>
          <h2 className="text-2xl font-semibold mb-2">1. General</h2>
          <p>
            Welcome to BookForValue. By accessing or using our website
            (bookforvalue.com or bookforvalue.in), you agree to comply with
            these Terms & Conditions. By placing an order, you confirm that the
            information you provide is accurate and complete.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Order Confirmation</h2>
          <p>
            After placing an order, the order details will be shared with the
            customer via the email address provided during checkout. Customers
            are responsible for verifying that the provided information is
            correct.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Delivery Policy</h2>
          <p>
            We aim to deliver orders within 10 days from the date of order
            confirmation. Delivery time may vary due to unforeseen incidents,
            logistics delays, public holidays, or transportation disruptions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            4. Refund & Replacement Policy
          </h2>
          <p>
            Customers may request a replacement or refund within 3 days of
            delivery if the product is damaged, defective, or incorrect. The
            item must be unused and in its original condition.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Bulk Orders</h2>
          <p>
            Customers who wish to place bulk orders may contact BookForValue via
            email, WhatsApp, or phone. Bulk pricing and delivery terms may vary.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            6. Customer Responsibility
          </h2>
          <p>
            Customers are responsible for providing correct details including
            name, address, phone number, and email. BookForValue will not be
            responsible for delivery issues caused by incorrect information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            7. Official Communication
          </h2>
          <p>
            Official communication from BookForValue will only be sent from
            <strong> info@bookforvalue.com</strong>. Customers should only trust
            emails received from this official email address.
          </p>
        </div>

      </section>

      <hr className="my-16" />

      <h1 className="text-4xl font-bold mb-6">
        Privacy Policy
      </h1>

      <section className="space-y-6">

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect only the information necessary to process orders such as
            name, delivery address, phone number, and email address.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            2. Data Storage
          </h2>
          <p>
            BookForValue does not permanently store customer personal
            information. Details provided during checkout are only used for
            order processing and delivery coordination.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            3. Data Access
          </h2>
          <p>
            Customer information may be accessed only by authorized
            BookForValue personnel and logistics partners required to complete
            deliveries.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            4. Cookies
          </h2>
          <p>
            Our website may use cookies for basic website functionality and
            improving user experience. These cookies do not store personal
            identity information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            5. Policy Updates
          </h2>
          <p>
            BookForValue may update this Privacy Policy periodically. Any
            changes will be reflected on this page.
          </p>
        </div>

      </section>

      <hr className="my-16" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          For questions regarding these policies, please contact:
        </p>

        <p className="mt-3">
          Email: <strong>info@bookforvalue.com</strong>
        </p>

        <p>Website: bookforvalue.com | bookforvalue.in</p>
      </section>
    </main>
  );
}