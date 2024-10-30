// src/pages/notFound.tsx
const NotFoundPage = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <a href="/">
        <h1 className="text-3xl">{"<-------"}</h1>
      </a>
    </main>
  );
};

export default NotFoundPage;
