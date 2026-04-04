export default function HomePage() {
  return (
    <main className="shell">
      <div className="panel">
        <p className="eyebrow">Lectures After Dark</p>
        <h1>Payload CMS</h1>
        <p>
          This service hosts the Payload admin and public content APIs for the
          Cloudflare Worker frontend.
        </p>
        <ul>
          <li>Admin: <code>/admin</code></li>
          <li>REST API: <code>/api</code></li>
        </ul>
      </div>
    </main>
  );
}

