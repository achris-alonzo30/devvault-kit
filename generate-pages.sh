#!/bin/bash

# Define the base path where your pages folder exists
BASE_PATH="C:/Users/humes/OneDrive/Documents/GitHub/interviewmaster.ai_next.js/src/app/pages"

# Create the directories if they don't already exist
mkdir -p "$BASE_PATH/products" "$BASE_PATH/services" "$BASE_PATH/company" "$BASE_PATH/community" "$BASE_PATH/resources"

# Create .tsx files for each page under the respective directories

# Products Pages
touch "$BASE_PATH/products/resume-builder.tsx"
touch "$BASE_PATH/products/interview-prep.tsx"
touch "$BASE_PATH/products/ai-mock-interviews.tsx"
touch "$BASE_PATH/products/skill-assessment.tsx"
touch "$BASE_PATH/products/job-tracker.tsx"

# Services Pages
touch "$BASE_PATH/services/coaching.tsx"
touch "$BASE_PATH/services/career-counselling.tsx"
touch "$BASE_PATH/services/resume-review.tsx"
touch "$BASE_PATH/services/mock-interviews.tsx"
touch "$BASE_PATH/services/skill-workshops.tsx"

# Company Pages
touch "$BASE_PATH/company/about.tsx"
touch "$BASE_PATH/company/careers.tsx"
touch "$BASE_PATH/company/team.tsx"
touch "$BASE_PATH/company/contact.tsx"
touch "$BASE_PATH/company/press.tsx"

# Community Pages
touch "$BASE_PATH/community/forums.tsx"
touch "$BASE_PATH/community/events.tsx"
touch "$BASE_PATH/community/success-stories.tsx"
touch "$BASE_PATH/community/volunteer.tsx"
touch "$BASE_PATH/community/ambassadors.tsx"

# Resources Pages
touch "$BASE_PATH/resources/docs.tsx"
touch "$BASE_PATH/resources/blog.tsx"
touch "$BASE_PATH/resources/faqs.tsx"
touch "$BASE_PATH/resources/case-studies.tsx"
touch "$BASE_PATH/resources/help-center.tsx"

# Add a basic template to each .tsx file
for file in "$BASE_PATH"/*/*/*.tsx; do
    echo "import React from 'react';" > "$file"
    echo "" >> "$file"
    echo "const $(basename "$file" .tsx) = () => {" >> "$file"
    echo "    return (" >> "$file"
    echo "        <div>" >> "$file"
    echo "            <h1>$(basename "$file" .tsx)</h1>" >> "$file"
    echo "            <p>Welcome to the $(basename "$file" .tsx) page.</p>" >> "$file"
    echo "        </div>" >> "$file"
    echo "    );" >> "$file"
    echo "};" >> "$file"
    echo "" >> "$file"
    echo "export default $(basename "$file" .tsx);" >> "$file"
done

echo "File structure and template code generated successfully!"
