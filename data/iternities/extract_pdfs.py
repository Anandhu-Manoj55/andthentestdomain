import pypdf
import os
import sys

pdf_dir = os.path.dirname(os.path.abspath(__file__))
pdfs = [
    "Ayurvedic Reset.pdf",
    "Balance & Bliss.pdf",
    "Path to Wellness.pdf",
    "Rejuvenate & Restore.pdf",
    "Strength and Serenity.pdf",
    # Also extract existing ones for verification
    "Land of Kings.pdf",
    "Timeless Treasures.pdf",
    "Wild Encounters.pdf",
    "Gods Own Country Unveiled.pdf",
    "Tete a Tete with Gods.pdf",
    "Awakening of an Empire.pdf",
    "Temple trail.pdf",
    "By the Beach.pdf",
    "Sun, Heritage, and Splendor.pdf",
    # Multi-country
    "1. Bhutan & India.pdf",
    "2. Sri Lanka.pdf",
    "3. Nepal & India.pdf",
    "4. Nepal & Bhutan.pdf",
]

for pdf_name in pdfs:
    path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(path):
        print(f"\n{'='*60}\nMISSING: {pdf_name}\n{'='*60}")
        continue
    
    print(f"\n{'='*60}")
    print(f"PDF: {pdf_name}")
    print(f"{'='*60}")
    
    try:
        reader = pypdf.PdfReader(path)
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text and text.strip():
                print(f"\n--- Page {i+1} ---")
                print(text.strip())
    except Exception as e:
        print(f"ERROR: {e}")
