import os, re

files = []
for root, dirs, fnames in os.walk('src'):
    for f in fnames:
        if f.endswith('.tsx'):
            files.append(os.path.join(root, f))

# Let's inspect buttons without rounded-full or rounded-xl
square_buttons = []
for path in sorted(files):
    with open(path) as file:
        lines = file.readlines()
        for idx, line in enumerate(lines):
            if '<button' in line or 'btn' in line:
                # check next 4 lines
                chunk = "".join(lines[idx:idx+5])
                if 'className=' in chunk and not ('rounded-full' in chunk or 'rounded-2xl' in chunk or 'rounded-xl' in chunk):
                    square_buttons.append((path, idx+1, chunk.strip()))

print(f"Buttons without high rounded radius: {len(square_buttons)}")
for p, l, text in square_buttons[:20]:
    print(f"{p}:{l} -> {text[:120]}...")
