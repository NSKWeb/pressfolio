import type { APIRoute } from 'astro';

export const prerender = false;

// NaraRouter Configuration
// Sign up at https://nara.id for free API key
// Get 7 Million FREE tokens per day!
const NARA_API_URL = 'https://router.bynara.id/v1/chat/completions';
const NARA_DEFAULT_MODEL = 'nara/nara-1-20251101'; // Default model on NaraRouter

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { 
      title, 
      source, 
      date, 
      location,
      quote, 
      figures, 
      context, 
      format = 'article',
      apiKey,
      model = NARA_DEFAULT_MODEL
    } = body;

    // Validate required fields
    if (!title || !context) {
      return new Response(JSON.stringify({ 
        error: 'Title and context are required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check API key - use environment variable or provided key
    const narakey = import.meta.env.NARA_API_KEY || apiKey;
    
    if (!narakey) {
      return new Response(JSON.stringify({
        error: 'API key not configured. Please get your free NaraRouter API key from https://nara.id and set NARA_API_KEY in environment variables.'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Build the prompt based on format
    let prompt = '';
    
    if (format === 'brief') {
      prompt = `You are a professional content writer. Transform this press release into a quick brief format.

SOURCE: ${source}
DATE: ${date}
LOCATION: ${location}
TITLE: ${title}
KEY QUOTE: ${quote || 'Not available'}
KEY FIGURES:
${figures || 'Not available'}
CONTEXT: ${context}

Create a brief, scannable format with:
1. A compelling headline
2. Quick take summary (2-3 lines)
3. Key bullet points
4. The key quote
5. Source attribution

Keep it concise and engaging. Use markdown formatting.`;
    } else if (format === 'thread') {
      prompt = `You are a professional content writer. Transform this press release into a Twitter/X thread format.

SOURCE: ${source}
DATE: ${date}
TITLE: ${title}
KEY QUOTE: ${quote || 'Not available'}
KEY FIGURES:
${figures || 'Not available'}
CONTEXT: ${context}

Create a Twitter thread with:
1. Hook tweet (attention grabbing)
2. 3-5 informative tweets
3. Key points numbered
4. Include relevant figures
5. CTA or engagement question at end

Format each tweet with numbering: "1/" and use relevant emojis. Keep each tweet under 280 characters where possible. Use markdown.`;
    } else {
      // Simple article format - like basic mode but AI-enhanced
      prompt = `Write a simple, clean blog post from this press release.

TITLE: ${title}
SOURCE: ${source}
DATE: ${date}
LOCATION: ${location}
KEY QUOTE: ${quote || 'Not available'}
KEY FIGURES: ${figures || 'Not available'}
CONTEXT: ${context}

Write in this format:

## ${title}

[Short intro paragraph about the news]

[Main content - 2-3 short paragraphs]

> "${quote || 'Key quote from the source'}"

**Key Points:**
- [Bullet point 1]
- [Bullet point 2]
- [Bullet point 3]

Source: ${source} | ${date}

Keep it simple, clean, and readable. 200-400 words only. No complex structure needed.`;
    }

    // Call NaraRouter API (OpenAI-compatible)
    const response = await fetch(NARA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${narakey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: 'You are an expert content writer specializing in transforming press releases into engaging blog posts, quick briefs, and social media threads.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1200
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('NaraRouter API error:', errorData);
      
      if (response.status === 401 || response.status === 403) {
        return new Response(JSON.stringify({
          error: 'Invalid NaraRouter API key. Please get a free key from https://nara.id'
        }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      return new Response(JSON.stringify({
        error: 'AI generation failed. Please try again.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const generatedContent = data.choices?.[0]?.message?.content || '';

    if (!generatedContent) {
      return new Response(JSON.stringify({
        error: 'No content generated. Please try again.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      content: generatedContent,
      format: format,
      wordCount: generatedContent.split(/\s+/).length,
      provider: 'NaraRouter',
      tokensUsed: data.usage?.total_tokens || 0
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({
      error: 'Server error. Please try again later.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Handle GET requests
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    message: 'PressFolio AI Generation API (Powered by NaraRouter)',
    version: '1.0',
    provider: 'NaraRouter - 7M Free Tokens Daily!',
    signup: 'https://nara.id',
    endpoints: {
      POST: '/api/generate - Generate blog content using AI',
      body: {
        title: 'string (required)',
        source: 'string (optional)',
        date: 'string (optional)',
        location: 'string (optional)',
        quote: 'string (optional)',
        figures: 'string (optional)',
        context: 'string (required)',
        format: 'article | brief | thread (default: article)',
        model: 'string (optional, default: nara/nara-1-20251101)'
      }
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
