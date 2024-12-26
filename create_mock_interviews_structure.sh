#!/bin/bash

# Base directory where the mock-interviews folder should be created
base_dir="src/app/products/mock-interviews"

# Check if the base directory exists, if not, create it
if [ ! -d "$base_dir" ]; then
  mkdir -p "$base_dir"
  echo "Created directory: $base_dir"
else
  echo "Directory $base_dir already exists. Skipping creation."
fi

# Create components directory and files
components_dir="$base_dir/components"
if [ ! -d "$components_dir" ]; then
  mkdir -p "$components_dir"
  echo "Created directory: $components_dir"
else
  echo "Directory $components_dir already exists. Skipping creation."
fi

declare -a component_files=("Header.tsx" "QuestionList.tsx" "SelectedQuestion.tsx" "LiveRecorder.tsx" "FeedbackSection.tsx" "Button.tsx" "ThemeProvider.tsx")

for file in "${component_files[@]}"; do
  if [ ! -f "$components_dir/$file" ]; then
    touch "$components_dir/$file"
    echo "Created file: $components_dir/$file"
  else
    echo "File $components_dir/$file already exists. Skipping creation."
  fi
done

# Create data directory and files
data_dir="$base_dir/data"
if [ ! -d "$data_dir" ]; then
  mkdir -p "$data_dir"
  echo "Created directory: $data_dir"
else
  echo "Directory $data_dir already exists. Skipping creation."
fi

declare -a data_files=("questions.json" "theme.json")

for file in "${data_files[@]}"; do
  if [ ! -f "$data_dir/$file" ]; then
    touch "$data_dir/$file"
    echo "Created file: $data_dir/$file"
  else
    echo "File $data_dir/$file already exists. Skipping creation."
  fi
done

# Create styles directory and files
styles_dir="$base_dir/styles"
if [ ! -d "$styles_dir" ]; then
  mkdir -p "$styles_dir"
  echo "Created directory: $styles_dir"
else
  echo "Directory $styles_dir already exists. Skipping creation."
fi

declare -a style_files=("globals.css" "interviewPage.module.css")

for file in "${style_files[@]}"; do
  if [ ! -f "$styles_dir/$file" ]; then
    touch "$styles_dir/$file"
    echo "Created file: $styles_dir/$file"
  else
    echo "File $styles_dir/$file already exists. Skipping creation."
  fi
done

# Create the main page file
if [ ! -f "$base_dir/page.tsx" ]; then
  touch "$base_dir/page.tsx"
  echo "Created file: $base_dir/page.tsx"
else
  echo "File $base_dir/page.tsx already exists. Skipping creation."
fi

# Create MockInterviewDetails page file
if [ ! -f "$base_dir/MockInterviewDetails.tsx" ]; then
  touch "$base_dir/MockInterviewDetails.tsx"
  echo "Created file: $base_dir/MockInterviewDetails.tsx"
else
  echo "File $base_dir/MockInterviewDetails.tsx already exists. Skipping creation."
fi

# Create utils directory and files
utils_dir="$base_dir/utils"
if [ ! -d "$utils_dir" ]; then
  mkdir -p "$utils_dir"
  echo "Created directory: $utils_dir"
else
  echo "Directory $utils_dir already exists. Skipping creation."
fi

declare -a utils_files=("formatFeedback.ts" "apiHandler.ts")

for file in "${utils_files[@]}"; do
  if [ ! -f "$utils_dir/$file" ]; then
    touch "$utils_dir/$file"
    echo "Created file: $utils_dir/$file"
  else
    echo "File $utils_dir/$file already exists. Skipping creation."
  fi
done

# Create README.md file
if [ ! -f "$base_dir/README.md" ]; then
  touch "$base_dir/README.md"
  echo "Created file: $base_dir/README.md"
else
  echo "File $base_dir/README.md already exists. Skipping creation."
fi

echo "File structure generation complete!"
