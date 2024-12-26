#!/bin/bash

# Define the base directory (adjust as necessary)
BASE_DIR="./src/pages"

# Create an associative array to map titles to their corresponding links
declare -A NAVIGATION_MENUS=(
  ["Products"]="/resume-builder /mock-interviews /ai-feedback /skills-analyzer /job-tracker /portfolio-builder"
  ["Services"]="/consultation /cv-revision /mock-tests /interview-coaching /personal-branding /salary-negotiation"
  ["Resources"]="/blog /faq /ebooks /tutorials /webinars /newsletters"
  ["Community"]="/forums /events /mentorship /success-stories /meetups /hackathons"
  ["Company"]="/about /careers /partners /contact /press /investors"
)

# Create files and folders based on the navigation structure
echo "Creating files and folders inside $BASE_DIR..."

for category in "${!NAVIGATION_MENUS[@]}"; do
  # Get the list of links for the current category
  links="${NAVIGATION_MENUS[$category]}"
  
  for link in $links; do
    # Convert the link to a directory path
    folder="$BASE_DIR${link}"
    
    # Create the directory if it doesn't exist
    mkdir -p "$folder"
    
    # Create the index.tsx file inside the directory
    file="$folder/index.tsx"
    
    # Add boilerplate content to the file
    cat > "$file" <<EOF
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1>${link:1} Page</h1>
      <p>Welcome to the ${link:1} page.</p>
    </div>
  );
};

export default Page;
EOF

    echo "Created $file"
  done
done

echo "All files and folders have been created successfully!"
