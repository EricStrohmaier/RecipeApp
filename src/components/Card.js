export default function Card({ recipe }) {
  return (
    <div className="overflow-hidden mt-5 mb-5 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
    <a href={recipe.link} rel="noreferrer" title="Click me" target="_blank" className="flex flex-row justify-center items-center">
      <p className="mr-4">{recipe.title}</p>
      <div className="w-24 h-24 overflow-hidden rounded-lg">
        <img  src={recipe.imageSrc}  alt="Recipe Picture" />
      </div>

    </a>
  </div>
  );
}

