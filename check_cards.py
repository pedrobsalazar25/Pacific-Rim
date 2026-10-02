import os, re

files = []
for root, dirs, fnames in os.walk('src'):
    for f in fnames:
        if f.endswith('.tsx'):
            files.append(os.path.join(root, f))

square_cards = []
for path in sorted(files):
    with open(path) as file:
        lines = file.readlines()
        for idx, line in enumerate(lines):
            # check for card-like containers with border, bg, etc, but without rounded-2xl or rounded-3xl or rounded-xl
            if any(k in line for k in ['bg-[#0c263f]', 'bg-[#071B2D]', 'bg-white', 'bg-[#F7F7F3]']) and 'border' in line:
                if not any(r in line for r in ['rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full']):
                    square_cards.append((path, idx+1, line.strip()))

print(f"Cards/containers with border and background but missing high border radius: {len(square_cards)}")
for p, l, text in square_cards[:30]:
    print(f"{p}:{l} -> {text[:110]}")
