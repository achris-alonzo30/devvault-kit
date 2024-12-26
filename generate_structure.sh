#!/bin/bash

# Base directory
BASE_DIR="C:/Users/humes/OneDrive/Documents/GitHub/interviewmaster.ai_next.js/src/app"

# Create directories and files
mkdir -p "$BASE_DIR" && cd "$BASE_DIR"

# Define an associative array of paths
declare -A STRUCTURE=(
    # Root level
    ["layout.tsx"]=""
    ["page.tsx"]=""

    # Products
    ["products/layout.tsx"]=""
    ["products/page.tsx"]=""
    ["products/resume-builder/page.tsx"]=""
    ["products/interview-prep/page.tsx"]=""
    ["products/ai-mock-interviews/page.tsx"]=""
    ["products/skill-assessment/page.tsx"]=""
    ["products/job-tracker/page.tsx"]=""

    # Services
    ["services/layout.tsx"]=""
    ["services/page.tsx"]=""
    ["services/coaching/page.tsx"]=""
    ["services/career-counselling/page.tsx"]=""
    ["services/resume-review/page.tsx"]=""
    ["services/mock-interviews/page.tsx"]=""
    ["services/skill-workshops/page.tsx"]=""

    # Company
    ["company/layout.tsx"]=""
    ["company/page.tsx"]=""
    ["company/about/page.tsx"]=""
    ["company/careers/page.tsx"]=""
    ["company/team/page.tsx"]=""
    ["company/contact/page.tsx"]=""
    ["company/press/page.tsx"]=""

    # Community
    ["community/layout.tsx"]=""
    ["community/page.tsx"]=""
    ["community/forums/page.tsx"]=""
    ["community/events/page.tsx"]=""
    ["community/success-stories/page.tsx"]=""
    ["community/volunteer/page.tsx"]=""
    ["community/ambassadors/page.tsx"]=""

    # Resources
    ["resources/layout.tsx"]=""
    ["resources/page.tsx"]=""
    ["resources/docs/page.tsx"]=""
    ["resources/blog/page.tsx"]=""
    ["resources/faqs/page.tsx"]=""
    ["resources/case-studies/page.tsx"]=""
    ["resources/help-center/page.tsx"]=""
)

# Create the directory structure and files
for path in "${!STRUCTURE[@]}"; do
    mkdir -p "$(dirname "$path")"
    touch "$path"
done

echo "File structure generated successfully in $BASE_DIR"
