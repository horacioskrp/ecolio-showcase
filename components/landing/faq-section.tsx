import { ChevronRight } from "lucide-react";
import { faqs } from "./data";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gs-fade-up">Questions fréquentes</h2>

        <div className="space-y-4 gs-stagger-up">
          {faqs.map((faq) => (
            <details key={faq.id} className="group section-shell p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-bold">
                <span className="text-left">{faq.q}</span>
                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition" />
              </summary>
              <p className="text-sm text-muted mt-4 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
