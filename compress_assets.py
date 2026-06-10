#!/usr/bin/env python3
import os
import sys

# Try to import Pillow. If not found, attempt to install it automatically.
try:
    from PIL import Image
except ImportError:
    print("Pillow is required for image compression. Attempting to install it via pip...")
    import subprocess
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        from PIL import Image
        print("Pillow installed successfully!")
    except Exception as e:
        print(f"Failed to install Pillow: {e}")
        print("Please run: pip install Pillow")
        sys.exit(1)

assets_dir = "src/assets"
max_size = (1000, 1000)
quality = 80

print(f"========== Compressing Images in {assets_dir} ==========")

if not os.path.exists(assets_dir):
    print(f"Error: {assets_dir} directory not found.")
    sys.exit(1)

for filename in os.listdir(assets_dir):
    filepath = os.path.join(assets_dir, filename)
    
    # Process only .jpg, .jpeg, and .png files
    ext = os.path.splitext(filename)[1].lower()
    if ext in ['.jpg', '.jpeg', '.png']:
        try:
            original_size = os.path.getsize(filepath)
            
            with Image.open(filepath) as img:
                # Keep aspect ratio and resize if image exceeds max dimensions
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
                
                # Overwrite original image with optimized version
                # If PNG, convert to RGB first if saving as JPEG, or save as optimized PNG
                if ext in ['.jpg', '.jpeg']:
                    img.save(filepath, "JPEG", optimize=True, quality=quality)
                elif ext == '.png':
                    # Save as optimized PNG
                    img.save(filepath, "PNG", optimize=True)
            
            new_size = os.path.getsize(filepath)
            reduction = (original_size - new_size) / original_size * 100
            print(f"Compressed {filename}:")
            print(f"  Before: {original_size / 1024:.2f} KB")
            print(f"  After:  {new_size / 1024:.2f} KB")
            print(f"  Reduction: {reduction:.2f}%")
        except Exception as e:
            print(f"Failed to process {filename}: {e}")

print("========== Compression Complete! ==========")
