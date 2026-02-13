import os
import re

directory = "d:/havenwatch-MS/components/ui"
pattern = re.compile(r'(from\s+["\'])([^"\']+)@[^"\']+(["\'])')

for filename in os.listdir(directory):
    if filename.endswith(".tsx") or filename.endswith(".ts"):
        filepath = os.path.join(directory, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        new_content = pattern.sub(r'\1\2\3', content)
        
        if content != new_content:
            print(f"Fixing {filename}")
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
