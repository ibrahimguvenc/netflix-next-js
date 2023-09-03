//? next.js olmayan route'lar deafult 404 sayfası sunmaktadır. Default 404 sayfasını "not-found.js" ile override edebiliriz

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src="/images/404-page-not-found.png" />
    </div>
  );
}
