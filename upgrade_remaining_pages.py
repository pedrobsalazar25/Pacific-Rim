import os, re

pages = [
    'src/pages/NoxSoxPage.tsx',
    'src/pages/WaterTreatmentPage.tsx',
    'src/pages/AdvancedMaterialsPage.tsx',
    'src/pages/ConcreteMaterialsPage.tsx',
    'src/pages/IndustrialEmissionsPage.tsx',
    'src/pages/ResourceRecoveryPage.tsx',
    'src/pages/WaterWastewaterPage.tsx'
]

# Patterns for buttons
replacements = [
    (
        'w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer',
        'w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-95 shadow-xl shadow-[#0084CD]/20 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer'
    ),
    (
        'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer',
        'w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0c263f]/80 backdrop-blur-md border border-white/20 hover:border-[#0084CD] text-slate-200 hover:text-white text-xs font-sans font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer'
    ),
    (
        'w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 border border-white/20 cursor-pointer shadow-lg',
        'w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-[#0084CD] to-[#123A63] hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all duration-300 border border-[#009EE3]/40 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5'
    ),
    (
        'inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl border border-white/20 cursor-pointer',
        'inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-95 shadow-xl shadow-[#0084CD]/20 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer'
    ),
    (
        'inline-flex items-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-black/10 cursor-pointer',
        'inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer'
    ),
    (
        'inline-flex items-center gap-1.5 px-4 py-2 bg-[#123A63] hover:bg-[#2F6F9F] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer',
        'inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0084CD] to-[#123A63] hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer'
    ),
    (
        'inline-flex items-center gap-1.5 px-4 py-2 bg-[#071B2D] hover:bg-[#123A63] text-white text-xs font-mono uppercase tracking-wider rounded-lg border border-[#DCE8EF] transition-colors cursor-pointer',
        'inline-flex items-center gap-2 px-5 py-2.5 bg-[#071B2D] hover:bg-[#123A63] text-white text-xs font-sans font-semibold uppercase tracking-wider rounded-full border border-[#2F6F9F]/50 hover:border-[#0084CD] transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer'
    ),
    (
        'inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-[#123A63] text-xs font-mono uppercase tracking-wider rounded-lg border border-[#DCE8EF] transition-colors cursor-pointer shadow-sm',
        'inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-[#123A63] text-xs font-sans font-semibold uppercase tracking-wider rounded-full border border-slate-300 hover:border-[#0084CD] transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer'
    )
]

for p in pages:
    with open(p) as f:
        text = f.read()
    
    # replace indicators
    text = text.replace('w-1.5 h-1.5 rounded-none bg-[#6D9F45]', 'w-1.5 h-1.5 rounded-full bg-[#6D9F45] shadow-[0_0_6px_#6D9F45]')
    text = text.replace('w-2 h-2 rounded-none bg-[#6D9F45]', 'w-2 h-2 rounded-full bg-[#6D9F45] shadow-[0_0_6px_#6D9F45]')
    
    # apply button replacements
    for src, dst in replacements:
        text = text.replace(src, dst)
        
    with open(p, 'w') as f:
        f.write(text)
    print(f"Updated {p}")
