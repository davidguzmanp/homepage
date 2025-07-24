#!/usr/bin/env python3
"""
Simple script to add new publications to your website.
Usage: python add_publication.py

This script will:
1. Ask for publication details
2. Add the publication to script.js
3. Show you exactly what was added
"""

import re
import json

def get_publication_info():
    """Get publication information from user input."""
    print("📚 Add New Publication")
    print("=" * 30)
    
    title = input("Title: ").strip()
    venue = input("Venue (e.g., 'ICML 2025', 'arXiv'): ").strip()
    authors = input("Authors (comma-separated): ").strip()
    abstract = input("Abstract/Description: ").strip()
    
    print("\nLinks (press Enter to skip):")
    links = []
    
    arxiv_url = input("arXiv URL: ").strip()
    if arxiv_url:
        links.append({"text": "arXiv", "url": arxiv_url})
        if not arxiv_url.endswith('.pdf'):
            pdf_url = arxiv_url.replace('/abs/', '/pdf/') + '.pdf' if '/abs/' in arxiv_url else arxiv_url + '.pdf'
            links.append({"text": "PDF", "url": pdf_url})
    
    paper_url = input("Paper URL: ").strip()
    if paper_url:
        links.append({"text": "Paper", "url": paper_url})
    
    code_url = input("Code URL: ").strip()
    if code_url:
        links.append({"text": "Code", "url": code_url})
    
    return {
        "title": title,
        "venue": venue,
        "authors": authors,
        "abstract": abstract,
        "links": links
    }

def format_publication_js(pub):
    """Format publication as JavaScript object."""
    links_str = ",\\n            ".join([
        f'{{ text: "{link["text"]}", url: "{link["url"]}" }}'
        for link in pub["links"]
    ])
    
    return f'''    {{
        title: "{pub["title"]}",
        venue: "{pub["venue"]}",
        authors: "{pub["authors"]}",
        abstract: "{pub["abstract"]}",
        links: [
            {links_str}
        ]
    }}'''

def add_publication_to_file(publication):
    """Add publication to script.js file."""
    script_file = "script.js"
    
    # Read the current file
    try:
        with open(script_file, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: {script_file} not found!")
        return False
    
    # Find the publications array and add the new publication
    pub_js = format_publication_js(publication)
    
    # Find the end of the publications array (look for the last }] before other code)
    pattern = r'(const publications = \[.*?\n)(];)'
    match = re.search(pattern, content, re.DOTALL)
    
    if not match:
        print("❌ Error: Could not find publications array in script.js")
        return False
    
    # Insert the new publication before the closing ];
    new_content = content[:match.end(1)] + pub_js + ",\\n" + match.group(2) + content[match.end():]
    
    # Write back to file
    with open(script_file, 'w') as f:
        f.write(new_content)
    
    return True

def main():
    print("🚀 David's Website Publication Manager")
    print("=====================================\\n")
    
    # Get publication info
    pub = get_publication_info()
    
    # Show preview
    print("\\n📋 Preview:")
    print("-" * 40)
    print(f"Title: {pub['title']}")
    print(f"Venue: {pub['venue']}")
    print(f"Authors: {pub['authors']}")
    print(f"Abstract: {pub['abstract'][:100]}...")
    print(f"Links: {len(pub['links'])} link(s)")
    
    # Confirm
    confirm = input("\\n✅ Add this publication? (y/N): ").strip().lower()
    if confirm != 'y':
        print("❌ Cancelled.")
        return
    
    # Add to file
    if add_publication_to_file(pub):
        print("\\n🎉 Publication added successfully!")
        print("\\n📝 Next steps:")
        print("1. Open your website to see the new publication")
        print("2. Commit and push to GitHub if you're using GitHub Pages")
        print("3. Your site will update automatically!")
    else:
        print("❌ Failed to add publication.")

if __name__ == "__main__":
    main()