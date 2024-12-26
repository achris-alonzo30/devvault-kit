#!/bin/bash

# Base directory for pages
BASE_DIR="D:/my programs/devvault-kit/src/pages"

# Function to create a file with default content
create_file() {
    local file_path="$1"
    local content="$2"
    mkdir -p "$(dirname "$file_path")" # Create the directory if it doesn't exist
    echo "$content" > "$file_path"    # Write the content to the file
}

# Default content for all pages
DEFAULT_CONTENT="import React from 'react';

const Page = () => {
    return (
        <div>
            <h1>This is the page</h1>
        </div>
    );
};

export default Page;
"

# Array of folder-file mappings
declare -A files=(
    # Top-level pages
    ["$BASE_DIR/index.tsx"]="$DEFAULT_CONTENT"

    # About section
    ["$BASE_DIR/about/index.tsx"]="$DEFAULT_CONTENT"

    # Blog section
    ["$BASE_DIR/blog/index.tsx"]="$DEFAULT_CONTENT"

    # Careers section
    ["$BASE_DIR/careers/index.tsx"]="$DEFAULT_CONTENT"

    # Community section
    ["$BASE_DIR/community/forums.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/community/events.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/community/mentorship.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/community/success-stories.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/community/meetups.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/community/hackathons.tsx"]="$DEFAULT_CONTENT"

    # Consultation section
    ["$BASE_DIR/consultation/index.tsx"]="$DEFAULT_CONTENT"

    # Contact section
    ["$BASE_DIR/contact/index.tsx"]="$DEFAULT_CONTENT"

    # Ebooks section
    ["$BASE_DIR/ebooks/index.tsx"]="$DEFAULT_CONTENT"

    # FAQ section
    ["$BASE_DIR/faq/index.tsx"]="$DEFAULT_CONTENT"

    # Investors section
    ["$BASE_DIR/investors/index.tsx"]="$DEFAULT_CONTENT"

    # Products section
    ["$BASE_DIR/job-tracker/index.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/mock-interviews/index.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/portfolio-builder/index.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/resume-builder/index.tsx"]="$DEFAULT_CONTENT"
    ["$BASE_DIR/skills-analyzer/index.tsx"]="$DEFAULT_CONTENT"

    # Salary Negotiation section
    ["$BASE_DIR/salary-negotiation/index.tsx"]="$DEFAULT_CONTENT"

    # Tutorials section
    ["$BASE_DIR/tutorials/index.tsx"]="$DEFAULT_CONTENT"

    # Webinars section
    ["$BASE_DIR/webinars/index.tsx"]="$DEFAULT_CONTENT"
)

# Loop through the array and create files
for file_path in "${!files[@]}"; do
    create_file "$file_path" "${files[$file_path]}"
    echo "Created $file_path"
done

echo "All files and directories created successfully!"
