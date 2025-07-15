#!/bin/bash

# Initialize variables
NOTEBOOK=$1
OUTPUT_DIR="../public/notebooks"

# Check that the notebook name is provided
if [ -z "$NOTEBOOK" ]; then
    echo "Error: No notebook file specified."
    echo "Usage: $0 notebook_path"
    exit 1
fi

# Check if the notebook file exists
if [ ! -f "$NOTEBOOK" ]; then
    echo "Error: Notebook not found at $NOTEBOOK"
    exit 1
fi

# Resolve paths to absolute paths
NOTEBOOK=$(realpath "$NOTEBOOK")
OUTPUT_DIR=$(realpath "$OUTPUT_DIR")

# Ensure the output directory exists
mkdir -p "$OUTPUT_DIR"

# Get the basename without extension for the output file
BASENAME=$(basename "$NOTEBOOK" .ipynb)
OUTPUT_FILE="$OUTPUT_DIR/${BASENAME}.html"

echo "Converting $NOTEBOOK to HTML..."

# Convert the notebook directly to the output directory
if jupyter nbconvert --to html \
    --template=custom_template \
    --output-dir="$OUTPUT_DIR" \
    --output="$BASENAME" \
    "$NOTEBOOK"; then
    echo "Successfully converted notebook to $OUTPUT_FILE"
else
    echo "Error: Failed to convert notebook"
    exit 1
fi
