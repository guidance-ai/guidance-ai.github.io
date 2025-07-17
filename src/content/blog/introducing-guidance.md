---
title: 'Introducing Guidance: A New Era of Language Model Control'
description: 'Learn about Guidance, a powerful framework for controlling language models with unprecedented precision and efficiency.'
pubDate: 2024-01-15
author: 'Guidance Team'
tags: ['announcement', 'framework', 'getting-started']
---

Welcome to Guidance! We're excited to introduce a revolutionary framework that gives developers unprecedented control over language model generation.

## What is Guidance?

Guidance is a programming paradigm that allows you to interleave generation, prompting, and logical control in a seamless, efficient way. Unlike traditional prompting approaches, Guidance enables:

- **Structured Generation**: Define exactly how your output should be formatted
- **Token Healing**: Automatically fix tokenization boundaries for better results
- **Efficient Execution**: Generate multiple outputs with shared prefixes in a single pass
- **Constrained Generation**: Ensure outputs follow specific patterns or grammars

## Key Features

### 1. Handlebars-like Syntax
```python
from guidance import models, gen

model = models.OpenAI("gpt-3.5-turbo")

with model.chat():
    model += "What is the capital of {{country}}?"
    model += gen(name="capital", max_tokens=10)
```

### 2. Role-based Chat
```python
with model.chat():
    with model.system():
        model += "You are a helpful assistant."
    with model.user():
        model += "What's the weather like?"
    with model.assistant():
        model += gen("response", max_tokens=100)
```

### 3. Constrained Generation
Generate outputs that match specific patterns:
```python
model += "Phone number: " + gen(pattern=r"\d{3}-\d{3}-\d{4}")
```

## Getting Started

Installation is simple:
```bash
pip install guidance
```

Then start building with any supported model:
```python
from guidance import models

# Use any model you like
model = models.OpenAI("gpt-4")
# or
model = models.Transformers("microsoft/phi-2")
```

## What's Next?

We're just getting started! In upcoming posts, we'll dive deeper into:
- Advanced constraint techniques
- Performance optimization strategies
- Real-world application examples
- Integration with popular frameworks

Stay tuned for more updates, and don't forget to check out our [documentation](/docs) and [GitHub repository](https://github.com/guidance-ai/guidance)!

Happy building with Guidance!