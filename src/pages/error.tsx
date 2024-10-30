// src/pages/error.tsx
const ErrorPage = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center text-center">
      <h1 className="text-3xl font-bold">500 - Something went wrong!</h1>
      <a href="/">
        <h1 className="text-3xl">{"<-------"}</h1>
      </a>
    </main>
  );
};

export default ErrorPage;
