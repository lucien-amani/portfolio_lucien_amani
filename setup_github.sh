#!/bin/bash

# Exit on any error
set -e

echo "========== Starting GitHub Setup =========="

# 1. Initialize local repository if not already done
if [ ! -d ".git" ]; then
    echo "Initializing local Git repository..."
    git init
    git branch -M main
else
    echo "Git repository already initialized."
fi

# 2. Stage all files
echo "Staging files..."
git add .

# 3. Create initial commit if there are changes to commit
if git diff-index --quiet HEAD -- 2>/dev/null; then
    echo "No changes to commit (working tree clean)."
else
    echo "Creating initial commit..."
    git commit -m "Initial commit"
fi

echo "========== Local Git Setup Complete! =========="
echo ""
echo "To push this to GitHub, please run one of the following options:"
echo ""
echo "Option A: Using the GitHub CLI (recommended if installed & logged in)"
echo "------------------------------------------------------------"
echo "Run the following command and follow the prompts:"
echo "  gh repo create lucien-amani-portfolio --public --source=. --push"
echo ""
echo "Option B: Using the GitHub Website"
echo "----------------------------------"
echo "1. Go to https://github.com/new and create a repository named 'lucien-amani-portfolio'"
echo "2. Run the following commands (replace USERNAME with your GitHub username):"
echo "  git remote add origin https://github.com/USERNAME/lucien-amani-portfolio.git"
echo "  git push -u origin main"
echo ""
