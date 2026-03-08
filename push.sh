#!/bin/bash

# Script to commit and push changes to GitHub
# Usage: ./push.sh "Your commit message"

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message."
    exit 1
fi

# Stage all changes
git add .

# Commit changes
git commit -m "$1"

# Push to GitHub (main branch)
git push origin main
