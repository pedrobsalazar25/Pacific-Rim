import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  Printer,
  Globe,
  CheckCircle2,
  AlertCircle,
  Wind,
  Droplets,
  Layers,
  Cpu,
  Send,
  Building2,
  User,
  ShieldCheck,
} from 'lucide-react';
import { PRDD_IMAGES } from '../data/prddData';
import { PrddImage } from './PrddImage';

interface ContactPageProps {
  initialTopic?: string;
  onNavigateHome?: (hash?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialTopic = '',
  onNavigateHome,
}) => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Industrial / Manufacturing',
    areaOfInterest: initialTopic || 'CO₂ Capture & Repurposing',
    challenge: '',
    preferredContact: 'Email' as 'Email' | 'Phone',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // References for scrolling and focusing
  const formSectionRef = useRef<HTMLElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);

  // Update areaOfInterest if initialTopic changes
  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({
        ...prev,
        areaOfInterest: initialTopic,
      }));
    }
  }, [initialTopic]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid business email address';
    }
    if (!formData.challenge.trim()) {
      newErrors.challenge = 'Please tell us about your project or environmental challenge';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Focus first error field if any
      if (!formData.firstName.trim() && firstNameInputRef.current) {
        firstNameInputRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate accessible client submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      industry: 'Industrial / Manufacturing',
      areaOfInterest: 'CO₂ Capture & Repurposing',
      challenge: '',
      preferredContact: 'Email',
    });
    setErrors({});
    if (firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    }
  };

  const scrollToFormAndFocus = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        if (firstNameInputRef.current) {
          firstNameInputRef.current.focus();
        }
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-[#071B2D] text-[#F7F7F3]">
      {/* ==================================================
          1. CONTACT HERO (Compact interior-page hero)
          ================================================== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-[#2F6F9F]/20 tech-grid-pattern">
        {/* Subtle radial blueprint glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2F6F9F]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Structural Linework */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6F9F]/35 to-transparent" />
        <div className="absolute top-0 left-8 bottom-0 w-px bg-white/5 hidden xl:block" />
        <div className="absolute top-0 right-8 bottom-0 w-px bg-white/5 hidden xl:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-6">
              <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
              <span>CONTACT PRDD</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6 [text-wrap:balance]">
              Let's Discuss<br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCE8EF] via-[#89B3D3] to-[#2F6F9F]">
                {' '}Your Challenge.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              Whether you're facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          2 & 3. MAIN CONTACT SECTION (Two-column layout)
          ================================================== */}
      <section
        ref={formSectionRef}
        id="contact-form-section"
        className="relative py-20 sm:py-28 lg:py-32 tech-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#89B3D3] font-semibold mb-3">
                  <span className="w-2 h-2 rounded-none bg-[#6D9F45]" />
                  <span>START A CONVERSATION</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                  Tell Us What<br />You're Working On.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Describe your project, environmental challenge, or technology interest. PRDD can review the information and determine the appropriate next step.
                </p>
              </div>

              {/* Form Container */}
              <div className="bg-[#0c263f] border border-[#2F6F9F]/30 p-6 sm:p-10 shadow-2xl shadow-[#071B2D]">
                {isSubmitted ? (
                  <div className="py-12 px-4 text-center space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center text-[#6D9F45] shadow-lg shadow-[#071B2D]">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
                      INQUIRY DETAILS PREPARED
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      Thank You, {formData.firstName}.
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry details regarding <strong className="text-[#DCE8EF]">{formData.areaOfInterest}</strong> are prepared. To send directly to PRDD engineering leadership, you can dispatch via your email client or contact Dr. Richardson directly:
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`mailto:robert@prdd.net?subject=${encodeURIComponent(`PRDD Inquiry: ${formData.areaOfInterest} (${formData.company || formData.firstName + ' ' + formData.lastName})`)}&body=${encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nArea of Interest: ${formData.areaOfInterest}\nPreferred Contact: ${formData.preferredContact}\n\nProject Challenge / Specifications:\n${formData.challenge}`)}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all cursor-pointer shadow-md shadow-[#071B2D] rounded-xl"
                      >
                        <Mail className="w-4 h-4 text-[#6D9F45]" />
                        <span>DISPATCH VIA EMAIL (ROBERT@PRDD.NET)</span>
                      </a>
                      <a
                        href="tel:530-474-4819"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-wider text-[#DCE8EF] hover:text-white bg-[#071B2D] border border-white/20 hover:border-[#2F6F9F] transition-all cursor-pointer rounded-xl"
                      >
                        <Phone className="w-4 h-4 text-[#2F6F9F]" />
                        <span>CALL 530-474-4819</span>
                      </a>
                    </div>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>RESET OR EDIT FORM</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                        >
                          First Name <span className="text-[#89B3D3]">*</span>
                        </label>
                        <input
                          ref={firstNameInputRef}
                          id="firstName"
                          type="text"
                          name="given-name"
                          autoComplete="given-name"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          placeholder="First name"
                          aria-invalid={errors.firstName ? 'true' : 'false'}
                          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                          className={`w-full px-4 py-3 bg-[#071B2D] border text-sm text-white placeholder-slate-500 rounded-none focus:outline-none transition-colors ${
                            errors.firstName
                              ? 'border-rose-500/80 focus:border-rose-400'
                              : 'border-[#2F6F9F]/30 focus:border-[#2F6F9F]'
                          }`}
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="text-xs text-rose-400 font-mono mt-1.5 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.firstName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                        >
                          Last Name <span className="text-[#89B3D3]">*</span>
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          name="family-name"
                          autoComplete="family-name"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          placeholder="Last name"
                          aria-invalid={errors.lastName ? 'true' : 'false'}
                          aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                          className={`w-full px-4 py-3 bg-[#071B2D] border text-sm text-white placeholder-slate-500 rounded-none focus:outline-none transition-colors ${
                            errors.lastName
                              ? 'border-rose-500/80 focus:border-rose-400'
                              : 'border-[#2F6F9F]/30 focus:border-[#2F6F9F]'
                          }`}
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="text-xs text-rose-400 font-mono mt-1.5 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.lastName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Company / Organization */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="organization"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Company or entity name"
                        className="w-full px-4 py-3 bg-[#071B2D] border border-[#2F6F9F]/30 text-sm text-white placeholder-slate-500 rounded-none focus:outline-none focus:border-[#2F6F9F] transition-colors"
                      />
                    </div>

                    {/* Row 3: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                        >
                          Email <span className="text-[#89B3D3]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@organization.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full px-4 py-3 bg-[#071B2D] border text-sm text-white placeholder-slate-500 rounded-none focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-rose-500/80 focus:border-rose-400'
                              : 'border-[#2F6F9F]/30 focus:border-[#2F6F9F]'
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-rose-400 font-mono mt-1.5 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-[#071B2D] border border-[#2F6F9F]/30 text-sm text-white placeholder-slate-500 rounded-none focus:outline-none focus:border-[#2F6F9F] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 4: Industry / Sector & Area of Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                        >
                          Industry / Sector
                        </label>
                        <select
                          id="industry"
                          value={formData.industry}
                          onChange={(e) =>
                            setFormData({ ...formData, industry: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#071B2D] border border-[#2F6F9F]/30 text-sm text-white rounded-none focus:outline-none focus:border-[#2F6F9F] transition-colors cursor-pointer"
                        >
                          <option value="Industrial / Manufacturing">Industrial / Manufacturing</option>
                          <option value="Energy">Energy</option>
                          <option value="Municipal / Wastewater">Municipal / Wastewater</option>
                          <option value="Environmental Engineering">Environmental Engineering</option>
                          <option value="Construction / Materials">Construction / Materials</option>
                          <option value="Technology / Licensing">Technology / Licensing</option>
                          <option value="Research / Development">Research / Development</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="areaOfInterest"
                          className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                        >
                          Area of Interest
                        </label>
                        <select
                          id="areaOfInterest"
                          value={formData.areaOfInterest}
                          onChange={(e) =>
                            setFormData({ ...formData, areaOfInterest: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#071B2D] border border-[#2F6F9F]/30 text-sm text-white rounded-none focus:outline-none focus:border-[#2F6F9F] transition-colors cursor-pointer"
                        >
                          <option value="CO₂ Capture & Repurposing">CO₂ Capture &amp; Repurposing</option>
                          <option value="NOx & SOx Abatement">NOx &amp; SOx Abatement</option>
                          <option value="Advanced Water Treatment">Advanced Water Treatment</option>
                          <option value="Advanced Materials">Advanced Materials</option>
                          <option value="Environmental Engineering">Environmental Engineering</option>
                          <option value="Process Development">Process Development</option>
                          <option value="Technology Licensing">Technology Licensing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Project / Environmental Challenge */}
                    <div>
                      <label
                        htmlFor="challenge"
                        className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-2"
                      >
                        Project / Environmental Challenge <span className="text-[#89B3D3]">*</span>
                      </label>
                      <textarea
                        id="challenge"
                        rows={5}
                        required
                        value={formData.challenge}
                        onChange={(e) =>
                          setFormData({ ...formData, challenge: e.target.value })
                        }
                        placeholder="Tell us about the problem, process, emissions stream, project, or technology you're interested in discussing."
                        aria-invalid={errors.challenge ? 'true' : 'false'}
                        aria-describedby={errors.challenge ? 'challenge-error' : undefined}
                        className={`w-full px-4 py-3 bg-[#071B2D] border text-sm text-white placeholder-slate-500 rounded-none focus:outline-none transition-colors leading-relaxed ${
                          errors.challenge
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-[#2F6F9F]/30 focus:border-[#2F6F9F]'
                        }`}
                      />
                      {errors.challenge && (
                        <p id="challenge-error" className="text-xs text-rose-400 font-mono mt-1.5 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.challenge}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 6: Preferred Contact Method */}
                    <div className="pt-2">
                      <span className="block text-xs font-mono uppercase text-[#DCE8EF] tracking-wider mb-3">
                        Preferred Contact Method
                      </span>
                      <div className="flex items-center gap-8 text-sm text-slate-300 font-mono">
                        <label className="inline-flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="Email"
                            checked={formData.preferredContact === 'Email'}
                            onChange={() =>
                              setFormData({ ...formData, preferredContact: 'Email' })
                            }
                            className="w-4 h-4 accent-[#2F6F9F] cursor-pointer"
                          />
                          <span>Email</span>
                        </label>
                        <label className="inline-flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="Phone"
                            checked={formData.preferredContact === 'Phone'}
                            onChange={() =>
                              setFormData({ ...formData, preferredContact: 'Phone' })
                            }
                            className="w-4 h-4 accent-[#2F6F9F] cursor-pointer"
                          />
                          <span>Phone</span>
                        </label>
                      </div>
                    </div>

                    {/* Note & Submit Button */}
                    <div className="pt-6 border-t border-[#2F6F9F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs font-mono text-slate-400">
                        Fields marked <span className="text-[#89B3D3]">*</span> are required.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all duration-200 shadow-xl shadow-[#071B2D] cursor-pointer active:scale-98 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>RECORDING INQUIRY...</span>
                        ) : (
                          <>
                            <span>SUBMIT INQUIRY</span>
                            <ArrowRight className="w-4 h-4 text-[#DCE8EF]" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Direct Contact Information & Robert Richardson */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Card 1: Direct Contact Information */}
              <div className="bg-[#0c263f] border border-[#2F6F9F]/30 p-6 sm:p-8 shadow-xl shadow-[#071B2D]">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#89B3D3] font-semibold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>DIRECT CONTACT</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
                  Clean Scrub Technologies
                </h3>

                <div className="space-y-6 text-sm font-mono">
                  {/* MAILING ADDRESS */}
                  <div className="pb-5 border-b border-[#2F6F9F]/20">
                    <span className="text-[10px] uppercase tracking-widest text-[#89B3D3] block mb-1.5">
                      MAILING ADDRESS
                    </span>
                    <p className="text-slate-200 leading-relaxed font-sans text-sm">
                      PO Box 146<br />
                      Shingletown, CA 96088<br />
                      United States
                    </p>
                  </div>

                  {/* PHONE */}
                  <div className="pb-5 border-b border-[#2F6F9F]/20">
                    <span className="text-[10px] uppercase tracking-widest text-[#89B3D3] block mb-1.5">
                      PHONE
                    </span>
                    <a
                      href="tel:5304744819"
                      className="text-base font-semibold text-[#DCE8EF] hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#2F6F9F]" />
                      <span>530-474-4819</span>
                    </a>
                  </div>

                  {/* FAX */}
                  <div className="pb-5 border-b border-[#2F6F9F]/20">
                    <span className="text-[10px] uppercase tracking-widest text-[#89B3D3] block mb-1.5">
                      FAX
                    </span>
                    <div className="text-sm font-semibold text-slate-300 inline-flex items-center gap-2">
                      <Printer className="w-4 h-4 text-[#2F6F9F]" />
                      <span>530-474-4820</span>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="pb-5 border-b border-[#2F6F9F]/20">
                    <span className="text-[10px] uppercase tracking-widest text-[#89B3D3] block mb-1.5">
                      EMAIL
                    </span>
                    <a
                      href="mailto:robert@prdd.net"
                      className="text-base font-semibold text-[#DCE8EF] hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#2F6F9F]" />
                      <span>robert@prdd.net</span>
                    </a>
                  </div>

                  {/* WEBSITE */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#89B3D3] block mb-1.5">
                      WEBSITE
                    </span>
                    <a
                      href="https://www.prdd.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#DCE8EF] hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4 text-[#2F6F9F]" />
                      <span>www.prdd.net</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Contact Robert Richardson */}
              <div className="bg-[#0c263f] border border-[#2F6F9F]/30 p-6 sm:p-8 shadow-xl shadow-[#071B2D]">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-20 h-24 shrink-0 overflow-hidden bg-[#071B2D] border border-[#2F6F9F]/40 shadow-inner">
                    <PrddImage
                      src={PRDD_IMAGES.founder}
                      alt="Dr. Robert Richardson - President of Clean Scrub Technologies"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      LEADERSHIP CONTACT
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                      Dr. Robert Richardson
                    </h4>
                    <p className="text-xs font-mono text-[#DCE8EF] font-medium mt-0.5">
                      President
                    </p>
                    <p className="text-[11px] font-mono text-slate-300 mt-2 leading-relaxed">
                      Ph.D. Chemist · Licensed General Contractor · Inventor
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2F6F9F]/20">
                  <a
                    href="mailto:robert@prdd.net"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all shadow-md shadow-[#071B2D]"
                  >
                    <span>EMAIL DR. RICHARDSON</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DCE8EF]" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          5. PROJECT DISCUSSION STRIP (Full-width light section)
          ================================================== */}
      <section className="relative bg-[#F7F7F3] text-[#20262B] py-20 sm:py-24 border-y border-[#DCE8EF] tech-grid-pattern-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#123A63] font-semibold mb-4">
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
            <span>WHAT CAN WE DISCUSS?</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A63] tracking-tight mb-12 [text-wrap:balance]">
            Environmental &amp; Industrial Process Topics
          </h3>

          {/* 4 Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* 1. EMISSIONS */}
            <div className="p-6 bg-white/80 border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F]/50 transition-colors">
              <div className="w-10 h-10 rounded bg-[#123A63]/10 border border-[#123A63]/20 flex items-center justify-center text-[#123A63] mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#2F6F9F] mb-1 font-bold">
                TOPIC 01
              </div>
              <h4 className="font-display text-lg font-bold text-[#123A63] mb-2">
                EMISSIONS
              </h4>
              <p className="text-xs sm:text-sm text-[#20262B]/80 leading-relaxed font-sans">
                CO₂, NOx, SOx and industrial air-treatment challenges.
              </p>
            </div>

            {/* 2. WATER */}
            <div className="p-6 bg-white/80 border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F]/50 transition-colors">
              <div className="w-10 h-10 rounded bg-[#123A63]/10 border border-[#123A63]/20 flex items-center justify-center text-[#123A63] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#2F6F9F] mb-1 font-bold">
                TOPIC 02
              </div>
              <h4 className="font-display text-lg font-bold text-[#123A63] mb-2">
                WATER
              </h4>
              <p className="text-xs sm:text-sm text-[#20262B]/80 leading-relaxed font-sans">
                Water reclamation, treatment and desalination applications.
              </p>
            </div>

            {/* 3. MATERIALS */}
            <div className="p-6 bg-white/80 border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F]/50 transition-colors">
              <div className="w-10 h-10 rounded bg-[#123A63]/10 border border-[#123A63]/20 flex items-center justify-center text-[#123A63] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#2F6F9F] mb-1 font-bold">
                TOPIC 03
              </div>
              <h4 className="font-display text-lg font-bold text-[#123A63] mb-2">
                MATERIALS
              </h4>
              <p className="text-xs sm:text-sm text-[#20262B]/80 leading-relaxed font-sans">
                Concrete, geopolymer and CO₂-derived material applications.
              </p>
            </div>

            {/* 4. TECHNOLOGY */}
            <div className="p-6 bg-white/80 border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F]/50 transition-colors">
              <div className="w-10 h-10 rounded bg-[#123A63]/10 border border-[#123A63]/20 flex items-center justify-center text-[#123A63] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#2F6F9F] mb-1 font-bold">
                TOPIC 04
              </div>
              <h4 className="font-display text-lg font-bold text-[#123A63] mb-2">
                TECHNOLOGY
              </h4>
              <p className="text-xs sm:text-sm text-[#20262B]/80 leading-relaxed font-sans">
                Process development, commercialization and licensing opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. CLOSING CTA (Premium dark PRDD navy closing section)
          ================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#071B2D] text-white border-t border-[#2F6F9F]/20 tech-grid-pattern text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] uppercase text-[#DCE8EF] font-semibold mb-6">
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
            <span>PRACTICAL IMPLEMENTATION</span>
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
            Complex Environmental<br />Problem?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            PRDD specializes in approaching environmental challenges from a combination of scientific, engineering and practical implementation perspectives.
          </p>

          <button
            type="button"
            onClick={scrollToFormAndFocus}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all duration-200 shadow-2xl shadow-[#071B2D] cursor-pointer active:scale-98"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 text-[#DCE8EF]" />
          </button>
        </div>
      </section>
    </div>
  );
};
