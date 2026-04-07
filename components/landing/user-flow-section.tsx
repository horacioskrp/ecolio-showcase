import { userFlow } from "./data";

export function UserFlowSection() {
  return (
    <section id="parcours" className="py-20 md:py-32 bg-white/2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gs-fade-up">Comment ça marche</h2>

        <div className="grid md:grid-cols-4 gap-6 gs-stagger-up">
          {userFlow.map((item) => (
            <div key={item.role} className="section-shell p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-xs font-bold text-muted mb-2">ÉTAPE {item.step}</p>
              <h3 className="font-bold mb-2">{item.role}</h3>
              <p className="text-sm text-muted">{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
