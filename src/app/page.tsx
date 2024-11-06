export default function Home() {
  const contactLinks = [
    {
      id: 1,
      name: "github",
      url: "https://github.com/tulioribeiro/",
    },
    {
      id: 2,
      name: "linkedin",
      url: "https://linkedin.com/in/tuliocribeiro/",
    },
    {
      id: 3,
      name: "email",
      url: "mailto:dev@tulio.app",
    },
  ];

  return (
    <div className="bg-slate-950 grid items-center justify-items-center min-h-screen p-20 gap-16">
      <main className="flex flex-col items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {contactLinks.map(({ id, name, url }) => (
            <a
              key={id}
              className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
