import pypdf
import os

pdf_dir = os.path.dirname(os.path.abspath(__file__))
pdfs = [
    "1. Bhutan & India.pdf",
    "2. Sri Lanka.pdf",
    "3. Nepal & India.pdf",
    "4. Nepal & Bhutan.pdf"
]

for pdf_name in pdfs:
    path = os.path.join(pdf_dir, pdf_name)
    print(f"\n{'='*60}\nPDF: {pdf_name}\n{'='*60}")
    try:
        reader = pypdf.PdfReader(path)
        full_text = ""
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                full_text += f"\n--- Page {i+1} ---\n{text.strip()}"
        print(full_text)
    except Exception as e:
        print(f"ERROR: {e}")
