import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    industry: 'Industrial Manufacturing',
    challengeType: initialTopic || 'CO2 Capture & Repurposing',
    message: '',
    preferredContact: 'Email',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.organization.trim()) errs.organization = 'Company / Organization is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      industry: 'Industrial Manufacturing',
      challengeType: 'CO2 Capture & Repurposing',
      message: '',
      preferredContact: 'Email',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
    >
      <div
        className="relative w-full max-w-2xl bg-[#071B2D] border border-[#2F6F9F]/30 text-white shadow-2xl overflow-hidden tech-grid-pattern my-8 max-h-[92vh] flex flex-col rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2F6F9F]/20 bg-[#0c263f]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] block flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              CLEAN SCRUB TECHNOLOGIES
            </span>
            <h3 id="contact-modal-title" className="font-display text-xl font-bold text-white">
              Project Consultation &amp; Inquiry
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center text-[#6D9F45]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                Message Sent
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for contacting Clean Scrub Technologies. We will review your inquiry and follow up at <strong className="text-[#DCE8EF]">{formData.email}</strong>.
              </p>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 text-xs font-mono uppercase font-semibold text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] rounded-full transition-all shadow-md shadow-[#071B2D]"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs text-slate-300">
                Talk with CST about your emissions, water treatment, process engineering or environmental technology requirements.
              </p>

              {/* Row 1: Name & Company/Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className={`w-full px-3 py-2.5 bg-[#0c263f] border text-xs text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-[#2F6F9F] ${
                      errors.name ? 'border-red-500' : 'border-[#2F6F9F]/30'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 font-mono mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or Organization"
                    className={`w-full px-3 py-2.5 bg-[#0c263f] border text-xs text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-[#2F6F9F] ${
                      errors.organization ? 'border-red-500' : 'border-[#2F6F9F]/30'
                    }`}
                  />
                  {errors.organization && (
                    <span className="text-[11px] text-red-400 font-mono mt-1 block">
                      {errors.organization}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3 py-2.5 bg-[#0c263f] border text-xs text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-[#2F6F9F] ${
                      errors.email ? 'border-red-500' : 'border-[#2F6F9F]/30'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 font-mono mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2.5 bg-[#0c263f] border border-[#2F6F9F]/30 text-xs text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-[#2F6F9F]"
                  />
                </div>
              </div>

              {/* Row 3: Industry & Project/Environmental Challenge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. Chemical, Power, Municipal"
                    className="w-full px-3 py-2.5 bg-[#0c263f] border border-[#2F6F9F]/30 text-xs text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-[#2F6F9F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Project / Environmental Challenge
                  </label>
                  <select
                    value={formData.challengeType}
                    onChange={(e) => setFormData({ ...formData, challengeType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0c263f] border border-[#2F6F9F]/30 text-xs text-white rounded-xl focus:outline-none focus:border-[#2F6F9F] cursor-pointer"
                  >
                    <option value="CO2 Capture & Repurposing">CO₂ Capture &amp; Repurposing</option>
                    <option value="NOx & SOx Abatement">NOx &amp; SOx Abatement</option>
                    <option value="Advanced Water Treatment">Advanced Water Treatment</option>
                    <option value="Advanced Materials">Advanced Materials</option>
                    <option value="Other Environmental Challenge">Other Environmental Challenge</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Contact Method */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Preferred Contact Method (Optional)
                </label>
                <div className="flex items-center gap-6 text-xs text-slate-300">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="Email"
                      checked={formData.preferredContact === 'Email'}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="accent-[#2F6F9F]"
                    />
                    <span>Email</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="Phone"
                      checked={formData.preferredContact === 'Phone'}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="accent-[#2F6F9F]"
                    />
                    <span>Phone</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your environmental challenge or project requirements..."
                  className={`w-full px-3 py-2 bg-[#0c263f] border text-xs text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-[#2F6F9F] ${
                    errors.message ? 'border-red-500' : 'border-[#2F6F9F]/30'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 font-mono mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-[#2F6F9F]/20">
                <span className="text-[11px] font-mono text-slate-400">
                  Clean Scrub Technologies
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-mono uppercase text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-sans font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] rounded-full transition-all duration-300 disabled:opacity-50 shadow-md shadow-[#071B2D] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span>SENDING...</span>
                    ) : (
                      <>
                        <span>DISCUSS YOUR PROJECT</span>
                        <Send className="w-3.5 h-3.5 text-white" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

