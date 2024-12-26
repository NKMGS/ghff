export async function GET() {
    const config = {
      accountAssociation: {
        header:
          'eyJmaWQiOjE5MDkxNSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGJlNjdDN0RENDlkRDQ1YTFhNTlDZjdDNEU5MzI2ZUNhMEQyMzkwNDcifQ',
        payload: 'eyJkb21haW4iOiJldGg0bGlmZS52ZXJjZWwuYXBwIn0',
        signature:
          'MHgzNmJkZTFkODY4YjBlNjZmZDQxOTYzZTE1MjJjNTk0NzFhYmYyZTY0MDlkZGMwZTMzODJmMjlkMjcxOWI1Njg4NDdkMWJkOThkY2M3NDAzY2FhMTliNjg1NjVjN2FmMTI3YTExZGY3OWI1NTBhNjMxMTZkZWNlN2JkMGQ2ODM2NjFi',
      },
      frame: {
        version: '1',
        name: 'x100 GEMs',
        iconUrl: 'https://eth4life.vercel.app/logo.png',
        homeUrl: 'https://eth4life.vercel.app',
        imageUrl: 'https://eth4life.vercel.app/logo.png',
        buttonTitle: 'Launch Frame',
        splashImageUrl: 'https://eth4life.vercel.app/logo.png',
        splashBackgroundColor: '#eeccff',
        webhookUrl: 'https://eth4life.vercel.app/api/webhook',
      },
    };
  
    return Response.json(config);
  }