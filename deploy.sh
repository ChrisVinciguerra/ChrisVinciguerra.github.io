#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # Copy CNAME file to dist folder for GitHub Pages
    if [ -f "CNAME" ]; then
        cp CNAME dist/
        echo "CNAME file copied to dist folder"
    fi
    
    echo "Deployment files ready in dist/ folder"
    echo "You can now deploy the contents of the dist/ folder to GitHub Pages or any other hosting service"
else
    echo "Build failed! Please check for errors."
    exit 1
fi 