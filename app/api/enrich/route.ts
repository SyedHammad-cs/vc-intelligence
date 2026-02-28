export async function POST(req: Request) {

  try {

    const { website } = await req.json()

    if (!website) {

      return Response.json({
        error: "Website is required"
      }, { status: 400 })

    }

    // Fetch website HTML
    const response = await fetch(website)

    const html = await response.text()

    // Extract title
    const titleMatch = html.match(/<title>(.*?)<\/title>/i)
    const title = titleMatch ? titleMatch[1] : "No title found"

    // Extract meta description
    const descMatch = html.match(
      /<meta name="description" content="(.*?)"/i
    )

    const description = descMatch
      ? descMatch[1]
      : "No description found"

    // Generate keywords from title
    const keywords = title
      .split(" ")
      .slice(0, 5)

    return Response.json({

      summary: description,

      keywords: keywords,

      source: website,

      timestamp: new Date().toISOString()

    })

  } catch (error) {

    return Response.json({

      error: "Failed to enrich company"

    }, { status: 500 })

  }

}